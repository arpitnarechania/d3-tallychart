var dataset =
[
    { group: "Grp 1", count: 5},
    { group: "Grp 2", count: 7},
    { group: "Grp 3", count: 11},
    { group: "Grp 4", count: 4},
    { group: "Grp 5", count: 19},
    { group: "Grp 6", count: 13}
];

function showLegend(element){
    legend = element.checked;

    if(!legend){
        $("#Matrix").empty();
    }

}

function changeBreakTickColor(element){
    break_tick_color = element.value;
    getData();
}

function changeNormalTickColor(element){
    normal_tick_color = element.value;
    getData();
}

function changeBarHeight(element){
    bar_height = element.value;
    getData();
}

function changeBreakAtCount(element){
    break_at_count = element.value;
    getData();
}

function changeRotationNormalTick(element){
    rotate_normal_tick_degrees = element.value;
    getData();
}

function changeBarWidth(element){
    bar_width = element.value;
    getData();
}

function getData() {

    var random_index = Math.floor(Math.random() * 6);
    dataset[random_index].count += 1;

    if(dataset[random_index].count == 50){
        dataset =
        [
            { group: "Grp 1", count: 5},
            { group: "Grp 2", count: 7},
            { group: "Grp 3", count: 11},
            { group: "Grp 4", count: 4},
            { group: "Grp 5", count: 19},
            { group: "Grp 6", count: 13}
        ];
    }

    var data_values = [];
    var data_labels = [];
    dataset.forEach(function(item){
        data_values.push([item.count]);
        data_labels.push('');
    });

    var data = {
        values: data_values.reverse(),
        labels: data_labels
    };

    $("#TallyChart").empty();
    drawTallyChart(dataset);

    if(legend){
        $("#Matrix").empty();
        drawMatrix(data);
    }
}


var refreshId;
function start_animation(){
    refreshId = setInterval(getData, 1000);
    $("#manual_add").prop('disabled', true);
    $("#start_animation").prop('disabled', true);
    $("#stop_animation").prop('disabled', false);
}
function stop_animation(){
    clearInterval(refreshId);
    $("#manual_add").prop('disabled', false);
    $("#start_animation").prop('disabled', false);
    $("#stop_animation").prop('disabled', true);
}

function drawMatrix(data){
     // Set the dimensions of the canvas / graph
    var	margin = {top: 20, right: 10, bottom: 50, left: 50},
        height = 400 - margin.top - margin.bottom;

    var chart_options = {
        container: "#Matrix",
        width: document.getElementById("container").offsetWidth*0.3 - margin.left - margin.right,
        height: height,
        margin: margin,
        show_labels : false,
        start_color : "#efefef",
        end_color : "#3498db",
        highlight_cell_on_hover: true,
        highlight_cell_color: "#9b59b6"
    };

    Matrix(data,chart_options);
}

function drawTallyChart(data){

    // Set the dimensions of the canvas / graph
    var	margin = {top: 20, right: 10, bottom: 50, left: 50},
        width = document.getElementById("container").offsetWidth*0.6 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    var chart_options = {
        container: "#TallyChart",
        width: width,
        height: height,
        margin: margin,
        bar_height: bar_height,
        bar_width: bar_width,
        break_at_count : break_at_count,
        normal_tick_color : normal_tick_color,
        break_tick_color : break_tick_color,
        rotate_normal_tick_degrees: rotate_normal_tick_degrees
    };

    TallyChart(data,chart_options);
}

var bar_height = document.getElementById("bar_height").value;
var bar_width = document.getElementById("bar_width").value;
var break_at_count = document.getElementById("break_at_count").value;
var normal_tick_color = document.getElementById("normal_tick_color").value;
var break_tick_color = document.getElementById("break_tick_color").value;
var rotate_normal_tick_degrees = document.getElementById("rotate_normal_tick_degrees").value;
var legend = document.getElementById("legend").checked;

start_animation()