## React Sterter Kit
A simple React.js Starter Kit for fast development.

### Scripts
**dev** for development env
**format** runs prettier plugin
**lint** eslint

```javascript

```

## 01) Add Document Elements with D3

The `select()` method selects one element from the document. It takes an argument for the name of the element you want and returns an HTML node for the first element in the document that matches the name. Here's an example:

```javascript
const anchor = d3.select("a");

const header = d3.select('body').append('h1').text('Learning D3');
```

## 02) Select a Group of Elements with D3

D3 also has the `selectAll()` method to select a group of elements. It returns an array of HTML nodes for all the items in the document that match the input string. Here's an example to select all the anchor tags in a document:

```javascript
const anchors = d3.selectAll("a");

d3.selectAll('li').text("List Item");
```
