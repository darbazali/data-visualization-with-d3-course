import * as d3 from 'd3';

/*===========================================
    21-  Create a Scatterplot with SVG Circles
============================================*/
/* 
    A scatter plot is another type of visualization. It usually uses circles to map data points, which have two values each. These values tie to the x and y axes, and are used to position the circle in the visualization.

    SVG has a circle tag to create the circle shape. It works a lot like the rect elements you used for the bar chart.
*/

const data = [
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

const w = 500, h = 500, r = 5;

// Main Canvas
const canvas = d3.select('body')
    .append('svg')
    .attr('width', w)
    .attr('height', h)
    .style('background-color', '#f6f6f6')

// Create Circles
const dots = canvas.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')




/*===========================================
    22-  Add Attributes to the Circle Elements
============================================*/
/* 
    A circle in SVG has three main attributes. The cx and cy attributes are the coordinates. They tell D3 where to position the center of the shape on the SVG canvas. The radius (r attribute) gives the size of the circle.
*/

// add cx, cy, radius attr to the circles

    .attr('cx', d => d[0])
    .attr('cy', d => h - d[1])
    .attr('r', r)


/*===========================================
    23-  Add Labels to Scatter Plot Circles
============================================*/
/* 
    You can add text to create labels for the points in a scatter plot.

    The goal is to display the comma-separated values for the first (x) and second (y) fields of each item in dataset.

    The text nodes need x and y attributes to position it on the SVG canvas. In this challenge, the y value (which determines height) can use the same value that the circle uses for its cy attribute. The x value can be slightly larger than the cx value of the circle, so the label is visible. This will push the label to the right of the plotted point.
*/

const label = canvas.selectAll('text')

label.data(data)
    .enter()
    .append('text')

    // set x and y coordinates same as dots
    .attr('x', d => d[0] + 5) // add 5 points to x value to push text to the right
    .attr('y', d => h - d[1])
    .text( d => `${d[0]}, ${d[1]}`)


    