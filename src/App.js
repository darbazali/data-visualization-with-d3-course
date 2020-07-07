import * as _ from 'd3'


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


const h = 500, w = 500;
const padding = 30;
const xMax = _.max(dataset, d => d[0])
const yMax = _.max(dataset, d => d[1])

const xScale = _.scaleLinear()
                .domain([0, xMax])
                .range([padding, w - padding])

const yScale = _.scaleLinear()
                .domain([0, yMax])
                .range([h - padding, padding])

const xAxis = _.axisBottom(xScale);
const yAxis = _.axisLeft(yScale);

const SVG = _.select('body').append('svg')


SVG.attr('height', h)
    .attr('width', w)


SVG.selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')

    .attr('cx', d => xScale(d[0]))
    .attr('cy', d => yScale(d[1]))
    .attr('r', 5)









SVG.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')

    .attr('x', d => xScale(d[0] + 10))
    .attr('y', d => yScale(d[1]))

    .text( d => ( d[0] + ", " + d[1]))
    .style('font-size', '14px')


SVG.append('g')
    .attr("transform", "translate(0," + (h - padding) + ")")
    .call(xAxis);

SVG.append('g')
    .attr("transform", "translate(" + padding + ",0)")
    .call(yAxis);




const dataset2 = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const BARSVG = _.select('body')
              .select('#root')
              .append('svg')
              .attr('height', 200)


BARSVG.selectAll('rect')
        .data(dataset2)
        .enter()
        .append('rect')

        .attr('fill', 'blue')
        .attr('height', d => d * 10)
        .attr('width', 30)

        .attr('x', (d, i) => i * 35)
        .attr('y',  d => 200 - d)




