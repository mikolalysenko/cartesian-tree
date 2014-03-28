"use strict"

module.exports = makeCartesianTree

function CartesianTreeNode(value, index) {
  this.value = value
  this.index = index
}

function makeCartesianTree(array, compare) {
  if(array.length === 0) {
    return {
      root: null,
      nodes: []
    }
  }

  var count = array.length
  var spine = []
  var nodes = new Array(count)

  compare = compare || function defaultCompare(a,b) {
    if(a < b) { return -1 }
    if(a > b) { return 1 }
    return 0
  }

  for(var i=0; i<count; ++i) {
    var node = new CartesianTreeNode(array[i], i)
    nodes[i] = node
    var last = null
    while(spine.length > 0) {
      var top = spine[spine.length-1]
      if(compare(top.value, node.value) >= 0) {
        last = spine.pop()
      } else {
        break
      }
    }
    if(last) {
      node.left = last
    }
    if(spine.length > 0) {
      spine[spine.length-1].right = node
    }
    spine.push(node)
  }

  return {
    root: spine[0],
    nodes: nodes
  }
}