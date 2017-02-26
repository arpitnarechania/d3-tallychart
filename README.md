# d3-tallychart

**d3-tallychart** is an open-source JavaScript library for rendering Tally charts using the D3.js library.

Check out an [Example](https://arpitnarechania.github.io/d3-tally/) where you can test various configuration options.

# Installation

Download d3-tallychart using bower.

```
bower install d3-tallychart --save
```

To use this library then, simply include d3.js, tallyChart.js and tallyChart.css:

``` html
<script src="/path/to/d3.min.js"></script>
<script src="/path/to/dist/tallyChart.css"></script>
<script src="/path/to/dist/tallyChart.js"></script>
```

# Usage

To use this library, you must create a container element and instantiate a new
Tally chart:

```html
<div id="TallyChart"></div>
```

Data in .json format
``` javascript
var data =
[
    { group: "Grp 1", count: 5},
    { group: "Grp 2", count: 40},
    { group: "Grp 3", count: 27},
    { group: "Grp 4", count: 13},
    { group: "Grp 5", count: 33},
    { group: "Grp 6", count: 65}
];
```

Setting chart parameters
``` javascript

    var chart_options = {
        container: "#TallyChart",
        width: 900,
        height: 500,
        margin: {top: 20, right: 10, bottom: 50, left: 50},
        bar_height: 25,
        bar_width: 2,
        break_at_count : 5,
        normal_tick_color : "#7B1FA2",
        break_tick_color : "#FF5252",
        rotate_normal_tick_degrees: 5
    };

    TallyChart(data,chart_options);
```

## Options

| Option                     | Description                                                               | Type     | Options
| -------------------------- | ------------------------------------------------------------------------- | -------- | -------------------------     |
| `container`                | The container of the chart                                                | string   | `#TallyChart`                         |
| `width`                    | The width of the chart in pixels                                          | number   | `900`                         |
| `height`                   | The height of the chart in pixels                                         | number   | `500`                         |
| `bar_width`                | The width of the bars in pixels                                           | number   | `2`                         |
| `bar_height`               | The height of the bars in pixels                                          | number   | `25`                         |
| `margin.top`               | The top margin                                                            | number   | `75`                          |
| `margin.bottom`            | The bottom margin                                                         | number   | `50`                          |
| `margin.left`              | The left margin                                                           | number   | `100`                         |
| `margin.right`             | The right margin                                                          | number   | `50`                          |
| `normal_tick_color`        | The color of the normal tick lines                                        | string   | `'green'`                     |
| `break_tick_color`         | The color of the diagonal/ break lines                                    | string   | `'red'`                       |
| `break_at_count`           | The count at which a diagonal line should be rendered                     | number   | `5`                           |
| `rotate_normal_tick_degrees`| The angle which the normal tick lines should be inclined at              | number   | `5`                           |

# Author

Arpit Narechania
arpitnarechania@gmail.com

# License

MIT license.