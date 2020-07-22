/* eslint-disable no-console */
import * as d3 from 'd3';

/*===========================================
    23-  Create a Linear Scale with D3
============================================*/
/* 
    D3 has several scale types. For a linear scale (usually used with quantitative data), there is the D3 method scaleLinear():

    const scale = d3.scaleLinear()

    The idea of scaling is to fit max number of data into the rnage of the width and height of the canvas, for expample, let's say, how could you fit billion in a 500px width area, that is where the scale could help

*/

const scale = d3.scaleLinear();
const output = scale(50);

console.log(output);


/*===========================================
    24-  Set a Domain and a Range on a Scale
============================================*/
/* 
    For sclaes we have to specify domain and range vlaues
    .domain() takes an array of min and max - input value

    .range() also takes an array of min and max - output value
*/

scale.domain([100, 500])
    .range([10, 50])


const color = d3.scaleLinear()

color.domain([-1, 0, 1])
    .range(["red", "white", 'green'])

console.log(color(-0.1)); // rgb(255, 230, 230)




/*===========================================
    25-  Use the d3.max and d3.min Functions 
    to Find Minimum and Maximum Values in a Dataset
============================================*/

/* 
    D3 has 2 methods to .min() and .max() to find the min and max values of
    the raw data

    const exampleData = [34, 234, 73, 90, 6, 52];
    d3.min(exampleData) // Returns 6
    d3.max(exampleData) // Returns 234

    these two methodes also take take callback functions as argument to specify wich point of data is being calculated

    we can also use d3.extent() methode to find min and max values at once
*/

const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]

// find the maximum of z value in the array
const zMax = d3.max(positionData, d => d[2]);
console.log(zMax);  // 8

// using extent() method
const exampleData = [34, 234, 73, 90, 6, 52];

const min_and_max = d3.extent(exampleData, d => d)

console.log(min_and_max);   // [6, 234]



/*===========================================
    26-  Use Dynamic Scales
============================================*/
/* 
    the domain goes from 0 to the maximum in the set. It uses the max() method with a callback function based on the x values in the arrays. The range uses the SVG canvas' width (w), but it includes some padding, too. This puts space between the scatter plot dots and the edge of the SVG canvas.
*/


const dataset = [
    [ 34,    78 ],
    [ 109,   280 ],
    [ 310,   120 ],
    [ 79,    411 ],
    [ 420,   220 ],
    [ 233,   145 ],
    [ 333,   96 ],
    [ 222,   333 ],
    [ 78,    320 ],
    [ 21,    123 ]
];

const w = 500, h = 500, padding = 30

const xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, d => d[0])])
    .range([padding, w - padding]);

const yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, d => d[1])])
    .range([h - padding, padding])


// Define Axes
const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

// create canvas
const canvas = d3.select('body').append('svg')

canvas.attr('width', w)
    .attr('height', h)
    .style('background-color', '#f9f9f9')


const dots = canvas.selectAll('circle')

dots.data(dataset)
    .enter()
    .append('circle')

    .attr('cx', d => xScale( d[0] ))
    .attr('cy', d => yScale( d[1] ))
    .attr('r', 5)


// Create labels
const label = canvas.selectAll('text');

label.data(dataset)
    .enter()
    .append('text')

    .attr('x', d => xScale( d[0] + 10))
    .attr('y', d => yScale( d[1] ))

    .text( d => `${d[0]}, ${d[1]}`)


canvas.append('g')
    .attr('transform', `translate(0, ${h - padding})`)
    .call(xAxis)

    canvas.append('g')
    .attr('transform', `translate(${padding}, 0)`)
    .call(yAxis)
