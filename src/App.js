import * as d3 from 'd3';

/* 
   Add Document Elements with D3Passed
  D3 has several methods that let you add and change elements in your document.

  const anchor = d3.select("a");
*/

d3.select('body').append('h1').text('Learning D3');



/* 
  Select a Group of Elements with D3
  D3 also has the selectAll() method to select a group of elements. It returns an array of HTML nodes for all the items in the document that match the input string. Here's an example to select all the anchor tags in a document:

  const anchors = d3.selectAll("a");
*/

d3.select('body').append('ul').append('li').text('list item 1')
d3.select('body').append('ul').append('li').text('list item 2')
d3.select('body').append('ul').append('li').text('list item 3')

d3.selectAll('li').text('List Item');



