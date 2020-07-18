import * as d3 from 'd3';

/*===========================================
    01- Add Document Elements with D3
============================================*/

// selecting a dom element
const body = d3.select('body')


// appending elements to a node
const h1 = body.append('h1');


// setting text to the node
h1.text('Learing D3');


// Getting text from the node
const text = h1.text() // returns Learning D3



/*===========================================
    02- Select a Group of Elements
============================================*/

// selectAll() is used to select a group of elements in the selected node
const anchor = d3.selectAll('a') // selects all anchor elements of the dom

body.selectAll('li')
    .text('list item');




/*===========================================
    03- Work with Data in D3

    The first step is to make D3 aware of the data. The data() method is used on a selection of DOM elements to attach the data to those elements. The data set is passed as an argument to the method.

    When enter() is combined with the data() method, it looks at the selected elements from the page and compares them to the number of data items in the set. If there are fewer elements than data items, it creates the missing elements.

    1. select a group of elements with .selectAll
    2. point dataset with .data(dataset)
    3. chain .enter() methode to look for entries
    4. append new elements with .append()
============================================*/

// our data
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// append this data to a set of h2 tags
d3.selectAll('h2')      // select all h2 tags
    .data(dataset)      // point data to each h2 tag
    .enter()            // search for missing tags
    .append('h2')       // append missing tags
    // .text("New Title") // set the value of h2 tags to this text




/*===========================================
    04- Work with Dynamic Data in D3
============================================*/
// The D3 text() method can take a string or a callback function as an argument:

// selection.text((d) => d)

    .text( (d) => d + " USD")


/*===========================================
    05- Add Inline Styling to Elements

    D3 lets you add inline CSS styles on dynamic elements with the style() method.

    The style() method takes a comma-separated key-value pair as an argument. Here's an example to set the selection's text color to blue:

    selection.style("color","blue");
============================================*/

    // chage the style of all elements
    .style( "font-family", "verdana")



/*===========================================
    06-  Change Styles Based on Data
============================================*/
/* 
    For example, you may want to color a data point blue if it has a value less than 20, and red otherwise. You can use a callback function in the style() method and include the conditional logic. 
*/

    .style( 'color', d => d < 20? 'red': 'green' )



/*===========================================
    07-  Add Classes with D3
============================================*/
/* 
    Using a lot of inline styles on HTML elements gets hard to manage, even for smaller apps. It's easier to add a class to elements and style that class one time using CSS rules. D3 has the attr() method to add any HTML attribute to an element, including a class name.

    The attr() method works the same way that style() does. It takes comma-separated values, and can use a callback function. Here's an example to add a class of "container" to a selection:

    selection.attr("class", "container");
*/

    .attr('class', 'price')


/*===========================================
    08-  Update the Height of an Element Dynamically
============================================*/
/* 
    The previous challenges covered how to display data from an array and how to add CSS classes. You can combine these lessons to create a simple bar chart. There are two steps to this:

    1) Create a div for each data point in the array

    2) Give each div a dynamic height, using a callback function in the style() method that sets height equal to the data value
*/


d3.selectAll('div')
    .data(dataset)
    .enter()
    .append('div')
    .attr('class', 'bar')
    .style('height', d =>  d + "px")


/*===========================================
    09-  Change the Presentation of a Bar Chart
============================================*/

/* 
    1) Add space between each bar to visually separate them, which is done by adding a margin to the CSS for the bar class

    2) Increase the height of the bars to better show the difference in values, which is done by multiplying the value by a number to scale the height

    style.css
    -------------
    .bar {
        margin: 2px
    }
*/


    .style('height', d => 10 * d + 'px')
