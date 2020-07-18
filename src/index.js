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