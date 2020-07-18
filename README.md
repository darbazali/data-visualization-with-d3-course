# Introduction to the Data Visualization with D3 

D3.js, or D3, stands for Data Driven Documents. D3 is a JavaScript library to create dynamic and interactive data visualizations in the browser. It's built to work with common web standards, namely HTML, CSS, and Scalable Vector Graphics (SVG).

D3 takes input data and maps it into a visual representation of that data. It supports many different data formats. D3 lets you bind (or attach) the data to the Document Object Model (DOM). You use HTML or SVG elements with D3's built-in methods to transform the data into a visualization.

/*===========================================
## 01- Add Document Elements with D3
============================================*/
```javascript
// selecting a dom element
const body = d3.select('body')


// appending elements to a node
const h1 = body.append('h1');


// setting text to the node
h1.text('Learing D3');


// Getting text from the node
const text = h1.text() // returns Learning D3
```


/*===========================================
## 02- Select a Group of Elements
============================================*/
```javascript
// selectAll() is used to select a group of elements in the selected node
const anchor = d3.selectAll('a') // selects all anchor elements of the dom

body.selectAll('li')
    .text('list item');

```


/*===========================================
## 03- Work with Data in D3

    The first step is to make D3 aware of the data. The data() method is used on a selection of DOM elements to attach the data to those elements. The data set is passed as an argument to the method.

    When enter() is combined with the data() method, it looks at the selected elements from the page and compares them to the number of data items in the set. If there are fewer elements than data items, it creates the missing elements.

    1. select a group of elements with .selectAll
    2. point dataset with .data(dataset)
    3. chain .enter() methode to look for entries
    4. append new elements with .append()
============================================*/
```javascript
// our data
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// append this data to a set of h2 tags
d3.selectAll('h2')      // select all h2 tags
    .data(dataset)      // point data to each h2 tag
    .enter()            // search for missing tags
    .append('h2')       // append missing tags
    // .text("New Title") // set the value of h2 tags to this text
```



/*===========================================
## 04- Work with Dynamic Data in D3
============================================*/
// The D3 text() method can take a string or a callback function as an argument:

```javascript
// selection.text((d) => d)

    .text( (d) => d + " USD")
```