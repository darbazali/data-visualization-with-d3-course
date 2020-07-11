import * as _ from 'd3';

/* 
    <svg xmlns="http://www.w3.org/2000/svg" width="141" height="122" viewBox="0 0 141 122"><defs><style>.a{fill:#fff;}.b,.c{stroke:none;}.c{fill:#707070;}</style></defs><g class="a">
    
    <path class="b" d="M 105.4614639282227 121.5 L 35.53853607177734 121.5 L 0.5774708390235901 61 L 35.53853607177734 0.5 L 105.4614639282227 0.5 L 140.4225311279297 61 L 105.4614639282227 121.5 Z"/>
    
    <path class="c" d="M 35.82710266113281 1 L 1.15496826171875 61 L 35.82710266113281 121 L 105.1728973388672 121 L 139.8450317382812 61 L 105.1728973388672 1 L 35.82710266113281 1 M 35.25 0 L 105.75 0 L 141 61 L 105.75 122 L 35.25 122 L 0 61 L 35.25 0 Z"/>
    
    </g></svg>
*/

const h = 400, w = 400

const data = [
    {x: 10, y: 20},
    {x: 100, y: 100},
    {x: 10, y: 200}
]

// Original Dataset
const dataset = [
    [ 34,     78 ],
    [ 109,   280 ],
    [ 310,   120 ],
    [ 79,   411 ],
    [ 420,   220 ],
    [ 233,   145 ],
    [ 333,   96 ],
    [ 222,    333 ],
    [ 78,    320 ],
    [ 21,   123 ]
  ];


const canvas = _.select('#path').append('svg')

        canvas.attr('height', h)
                .attr('width', w)
    
const group = canvas.append('g')
    .attr('transform', 'translate(100, 100)')


const line = _.line()
        .x( d => d[0])
        .y( d => h - d[1] )

group.selectAll("path")
        .data([dataset])
        .enter()
        .append('path')
        .attr('d', line)
        .attr('fill', 'none')
        .attr('stroke', 'red')
        .attr('stroke-width', 5)

