"use strict"

var makeCartesianTree = require("../cartesian")
var tape = require("tape")
var util = require("util")

tape("cartesian-tree", function(t) {

  function verify(array, compare) {
    var data = makeCartesianTree(array, compare)
    if(!compare) {
      compare = function(a, b) { return a - b }
    }
    t.equals(data.nodes.length, array.length, "check array counts match")
    for(var i=0; i<array.length; ++i) {
      t.equals(data.nodes[i].index, i, "check array index match")
      t.equals(data.nodes[i].value, array[i], "check array values match")
    }
    var visitCount = 0
    function visit(node, lo, hi) {
      visitCount += 1
      t.ok(lo <= node.index)
      t.ok(node.index <= hi)
      if(node.left) {
        t.ok(compare(node.value, node.left.value) <= 0)
        visit(node.left, lo, node.index)
      }
      if(node.right) {
        t.ok(compare(node.value, node.right.value) <= 0)  
        visit(node.right, node.index, hi)
      }
    }
    if(data.root) {
      visit(data.root, 0, array.length-1)
    }
    t.equals(visitCount, array.length)
  }

  verify([9, 3, 7, 1, 8, 12, 10, 20, 15, 18, 5])
  verify([1])
  verify([])

  t.end()
})