cartesian-tree
==============
Constructs a [Cartesian tree](http://en.wikipedia.org/wiki/Cartesian_tree) for an array in linear time.

# Example

```javascript
var createCartesianTree = require("cartesian-tree")
var util = require("util")

var array = [9, 3, 7, 1, 8, 12, 10, 20, 15, 18, 5]

var tree = createCartesianTree(array)

console.log(util.inspect(tree.root, {depth: 10}))
```

Output:

```javascript
{ value: 1,
  index: 3,
  left:
   { value: 3,
     index: 1,
     left: { value: 9, index: 0 },
     right: { value: 7, index: 2 } },
  right:
   { value: 5,
     index: 10,
     left:
      { value: 8,
        index: 4,
        right:
         { value: 10,
           index: 6,
           left: { value: 12, index: 5 },
           right:
            { value: 15,
              index: 8,
              left: { value: 20, index: 7 },
              right: { value: 18, index: 9 } } } } } }
```

# Install

```
npm install cartesian-tree
```

# API

### `require("cartesian-tree")(array[,compare])`
Creates a Cartesian tree from the given array

* `array` is a JavaScript array
* `compare` is an optional comparison function for ranking the elements in the tree

**Returns** An object containing two properties:

* `root` which is the root node of the Cartesian tree
* `nodes` which is an array of length `array.length` where the `i`th entry corresponds the Cartesian tree node associated to the `i`th entry in `array`

Each node in the tree has the following properties:

* `value` which is the value of the node
* `index` which is its occurence in `array`
* `left` which is a reference to the left child
* `right` which is a reference to the right child

# Credits
(c) 2014 Mikola Lysenko. MIT License