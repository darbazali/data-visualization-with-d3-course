import * as d3 from 'd3'
/*===========================================
    10-  Learn About SVG in D3
============================================*/
/* 
    SVG stands for Scalable Vector Graphics.

    Here "scalable" means that, if you zoom in or out on an object, it would not appear pixelated. It scales with the display system, whether it's on a small mobile screen or a large TV monitor.

    SVG is used to make common geometric shapes. Since D3 maps data into a visual representation, it uses SVG to create the shapes for the visualization. SVG shapes for a web page must go within an HTML svg tag.
*/

const svg = d3.select('body');
const w = 500, h = 100;

svg.append('svg')
    .attr('width', w)
    .attr('height', h)


/*===========================================
    11-  Display Shapes with SVG
============================================*/
/* 
    There are a number of supported shapes in SVG, such as rectangles and circles. They are used to display data. For example, a rectangle (<rect>) SVG shape could create a bar in a bar chart.

    When you place a shape into the svg area, you can specify where it goes with x and y coordinates. The origin point of (0, 0) is in the upper-left corner. Positive values for x push the shape to the right, and positive values for y push the shape down from the origin point.
*/

// Create a rect shape, and append it to svg element
// svg.append('rect')
//     // specify size of the rect
//     .attr('width', 25)
//     .attr('height', 100)

//     // set styles
//     .attr('fill', '#000')

//     // specify coordinates
//     .attr('x', 0)
//     .attr('y', 0)



/*===========================================
    12-  Create a Bar for Each Data Point in the Set
============================================*/
/* 
    The rects must be appended to an svg element, not directly to the body. Also, you need to tell D3 where to place each rect within the svg area.

    Use the data(), enter(), and append() methods to create and append a rect for each item in dataset.
*/
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// create a canvas
const canvas = d3.select('body')
    .append('svg')
    .attr('width', w)
    .attr('height', h)
    .attr('id', 'canvas')
    .style('background-color', '#f6f6f6')

// creat a rectangle for each data point of the array
canvas.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')


/*===========================================
    13-  Dynamically Set the Coordinates for Each Bar
============================================*/
/* 
    The placement of a rectangle is handled by the x and y attributes. They tell D3 where to start drawing the shape in the svg area. The last challenge set them each to 0, so every bar was placed in the upper-left corner.

    For a bar chart, all of the bars should sit on the same vertical level, which means the y value stays the same (at 0) for all bars. The x value, however, needs to change as you add new bars. Remember that larger x values push items farther to the right. As you go through the array elements in dataset, the x value should increase.

    The attr() method in D3 accepts a callback function to dynamically set that attribute. The callback function takes two arguments, one for the data point itself (usually d) and one for the index of the data point in the array. The second argument for the index is optional. Here's the format:

    selection.attr("property", (d, i) => {
        d is the data point value
        i is the index of the data point in the array
    })

    It's important to note that you do NOT need to write a for loop or use forEach() to iterate over the items in the data set. Recall that the data() method parses the data set, and any method that's chained after data() is run once for each item in the data set.
*/

    .attr('x', ( d, i ) => i * 30 ) // multiply x coordinate by 30 each time
    .attr('y', 0)

    .attr('height', h)
    .attr('width', 25)
    .attr('fill', 'red')



/*===========================================
    14-  Dynamically Change the Height of Each Bar
============================================*/
// Multiplying all data points by the same constant scales the data (like zooming in)
    .attr('height', d => d * 3)



/*===========================================
    15-  Invert SVG Elements
============================================*/
/* 
    The y coordinate that is y = heightOfSVG - heightOfBar would place the bars right-side-up.

    Note: In general, the relationship is y = h - m * d, where m is the constant that scales the data points.
*/

    .attr('y', d => h - d * 3 )




/*===========================================
    16-  Change the Color of an SVG Elemen
============================================*/
/* 
    In SVG, a rect shape is colored with the fill attribute. It supports hex codes, color names, and rgb values, as well as more complex options like gradients and transparency.
*/

    .attr('fill', 'navy')