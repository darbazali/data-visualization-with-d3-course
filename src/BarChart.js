import * as _ from 'd3';

const dataset = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const w = 500, h = 400;


const padding = 20;

const xMax = _.max(dataset, d => d)
const yMax = _.max(dataset, (d, i) => i )


// X Scale Equation
const xScale = _.scaleLinear()
                .domain([0, xMax])
                .range([padding, w - padding])

// Y Scale Equation
const yScale = _.scaleLinear()
                .domain([0, yMax])
                .range([h - padding, padding])

// Creating Axes
const xAxis = _.axisBottom(xScale);
const yAxis = _.axisLeft(yScale);



const canvas = _.select('#bar-chart').append('svg');

canvas.attr('width', w)
        .attr('height', h)
        .style('background-color', 'gray')


canvas.selectAll('rect')
        .data(dataset)
        .enter()
        .append('rect')

        .attr('fill', '#fff')

        .attr('height', d => d * 10)
        .attr('width', '20px')

        .attr('x',  d => xScale(d))
        .attr('y', d => h - padding - d * 10)

        .append('title')
        .text( d => d )



canvas.append('g')
        .attr("transform", "translate(0," + ( h - padding ) + ")")
        .call(xAxis);
    
canvas.append('g')
        .attr("transform", "translate(" + padding + ",0)")
        .call(yAxis);


