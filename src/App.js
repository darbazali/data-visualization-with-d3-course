import * as _ from "d3";

/* 
   Add Document Elements with D3Passed
  D3 has several methods that let you add and change elements in your document.

  const anchor = d3.select("a");
*/

// _.select("body").append("h1").text("Learning D3");

/* 
  Select a Group of Elements with D3
  D3 also has the selectAll() method to select a group of elements. It returns an array of HTML nodes for all the items in the document that match the input string. Here's an example to select all the anchor tags in a document:

  const anchors = d3.selectAll("a");
*/

// d3.select("body").append("ul").append("li").text("list item 1");
// d3.select("body").append("ul").append("li").text("list item 2");
// d3.select("body").append("ul").append("li").text("list item 3");

// d3.selectAll("li").text("List Item");

/* 
  Work with Data in D3
  The D3 library focuses on a data-driven approach. When you have a set of data, you can apply D3 methods to display it on the page. Data comes in many formats, but this challenge uses a simple array of numbers.

  When enter() is combined with the data() method, it looks at the selected elements from the page and compares them to the number of data items in the set. If there are fewer elements than data items, it creates the missing elements.

*/

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// d3.select("body")
//   .selectAll("h3")
//   .data(dataset)
//   .enter()
//   .append("h3")
//   .text( (data) => data + ' USD')




  /* 
   Work with Dynamic Data in D3
  The last two challenges cover the basics of displaying data dynamically with D3 using the data() and enter() methods. These methods take a data set and, together with the append() method, create a new DOM element for each entry in the data set. 

  The D3 text() method can take a string or a callback function as an argument:

  selection.text((d) => d)

  */


/* 
  Add Inline Styling to Elements
  D3 lets you add inline CSS styles on dynamic elements with the style() method.

  The style() method takes a comma-separated key-value pair as an argument. Here's an example to set the selection's text color to blue:

  selection.style("color","blue");
*/

  // .style('font-family', 'verdana')
  // .style('color', 'orange')
  // .style('color', d => d < 20? "green": 'red')


  // 1) Create a div for each data point in the array


// _.select('#root')
//   .selectAll('div')
//   .data(dataset)
//   .enter()
//   .append('div')
//   .text( d => d )
//   .attr('class', 'bar')
//   .style('background-color', 'green')
//   .style('height', d => d * 5 + 'px')





/* 
  Working with SVG with D3
*/
// _.select('body')
//   .append('hr')


// _.select('body')
//   .append('h3')
//   .text('Working with SVG with D3')

// const w = 500;
// const h = 100;
// const fill = 'red';


// const SVG = _.select('body')
//   .append('svg')
//   .style('width', w)
//   .style('height', h)
//   .style('background-color', 'pink')


// SVG.selectAll('rect')
//     .data(dataset)
//     .enter()
//     .append('rect')

//     .attr('width', 30)
//     .attr('height', d => 3 * d)

//     .attr('x', (d, i) => i * 35)
    
//     .attr('y', d => 100 - d * 3)

//     .attr('style', `fill:${fill}`)

// SVG.selectAll('rect')
//     .data(dataset)
//     .enter()
//     .append('rect')
//     .attr('style', 'fill:red')

//     .attr('width', 25)
//     // point data value to it's height, multiply it by 3 for scale
//     .attr('height', d => d * 3)

//     // multiply the index of data point by 30 each time
//     .attr('x', (d, i) => i * 30)

//     // The y coordinate that is y = heightOfSVG - heightOfBar would place the bars right-side-up.
//     .attr('y', (d, i) => 100 - d * 3)

//     // add a hover effect for the bars with a css class
//     .attr('class', 'hover-bar')

//     // Add tooltip bar chart
//     .append('title')
//     .text( d => d )



    // Adding labels

// SVG.selectAll('text')
//     .data(dataset)
//     .enter()
//     .append('text')

//     .attr('x', (d, i) => i * 30)
//     .attr('y', (d, i) => 100 - d * 3 - 3)

//     .text( d => d )

//     .attr('fill', 'red')
//     .style('font-size', '25px')




// _.select('body')
//   .append('h1')
//   .text('Learing D3')



// const newSVG = _.select('body').append('svg')

//       newSVG.attr('height', 150)
//             .attr('width', 500)
//             .style('background-color', 'rgb(201, 140, 198)')
//             .style('text-align', 'center')

//       newSVG.selectAll('rect')
//             .data(dataset)
//             .enter()
//             .append('rect')

//             .attr('height', d => d * 3)
//             .attr('width', 25)
//             .attr('class', 'hover')

//             .attr('fill', 'indigo')

//             // dinamicaly set the cordiantes
            
//             .attr('x', (d, i) => i * 30)
//             .attr('y', (d, i) => 150 - d * 3)

//             // add tooltips
//             .append('title')
//             .text( d => d)

//       newSVG.selectAll('text')
//             .data(dataset)
//             .enter()
//             .append('text')

//             .text( d => d)
//             .attr('x', (d, i) => i * 30)
//             .attr('y', (d, i) => 150 - d * 3 - 3)


// const dataset2 = [
//   [ 34,    78 ],
//   [ 109,   280 ],
//   [ 310,   120 ],
//   [ 79,    411 ],
//   [ 420,   220 ],
//   [ 233,   145 ],
//   [ 333,   96 ],
//   [ 222,   333 ],
//   [ 78,    320 ],
//   [ 21,    123 ]
// ];
// const svgH = 400; const svgW = 400;

// const svg  = _.select('body')
//               .append('svg')
//               .attr('height', svgH)
//               .attr('width', svgW)
//               .style('background-color', 'rgb(203, 140, 219)')


// svg.selectAll('circle')
//     .data(dataset2)
//     .enter()
//     .append('circle')

//     // place circles accordingly
//     .attr('cx', d => d[0])
//     .attr('cy', d => svgH - d[1])
//     .attr('r', 5)

//     // add labesl to the circles
//     svg.selectAll('text')
//         .data(dataset2)
//         .enter()
//         .append('text')

//         .attr('x', d => d[0] + 5)
//         .attr('y', d => svgH - d[1])
//         .text( d => (d[0] + ", " + d[1]))






// // Using Dynamic Scales

// const xMax = _.max(dataset2, d => d[0]);
// const yMax = _.max(dataset2, d => d[1]);
// const padding = 30;

// const xScale = _.scaleLinear()
//                 .domain([0, xMax])
//                 .range([padding, svgW - padding])

// const yScale = _.scaleLinear()
//                 .domain([0, yMax])
//                 .range([svgH - padding, padding])






const data = [
  [ 34,     78 ],
  [ 109,   280 ],
  [ 310,   120 ],
  [ 79,   411 ],
  [ 420,   220 ],
  [ 233,   145 ],
  [ 333,   96 ],
  [ 222,    333 ],
  [ 78,    320 ],
  [ 21,   123 ],
  [500, 600]
];

const h = 500, w = 500;
const padding = 20;

const xMax = _.max(data, d => d[0])
const yMax = _.max(data, d => d[1])

const xScale = _.scaleLinear()
                .domain([0, xMax])
                .range([padding, w - padding ])

const yScale = _.scaleLinear()
                .domain([0, yMax])
                .range([h - padding, padding])

const xAxis = _.axisBottom(xScale);
const yAxis = _.axisLeft(yScale);

/*================================  
    END OF VARIABLES
=================================*/



const SVG = _.select('body')
  .append('svg')
  .attr('height', h)
  .attr('width', w)
  .style('background-color', 'mintcream')


// Append Cirlces
SVG.selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr('fill', 'green')
  .attr('cx', d => xScale(d[0]))
  .attr('cy', d => yScale(d[1]))

  .attr('r', 5)


// Append labels
SVG.selectAll('text')
    .data(data)
    .enter()
    .append('text')

    .text( d => (d[0] + ", " + d[1]))
    .style('font-size', '14px')

    .attr('x', d => xScale(d[0] + 10))
    .attr('y', d => yScale(d[1]))

SVG.append("g")
.attr("transform", "translate(0," + (h - padding) + ")")
.call(xAxis);

SVG.append("g")
.attr("transform", "translate(" + padding + ",0)")
.call(yAxis);





