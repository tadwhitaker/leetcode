var _ = require('underscore');
var colors = require('./colors.js');
var zoot = [colors];

// var length = Object.keys(colors).length;

var test = '#000000';
console.log(zoot);

function shadeOfWhat (hexColor, [parentColors]) {
var parents = parentColors || [
  {
  'name': 'red',
  'hex': '#FF0000'
  },
  {
  'name': 'orange',
  'hex': '#FF7F00'
  },
  {
  'name': 'yellow',
  'hex': '#FF0000'
  },
  {
  'name': 'green',
  'hex': '#00FF00'
  },
  {
  'name': 'blue',
  'hex': '#0000FF'
  },
  {
  'name': 'violet',
  'hex': '#7F00FF'
  },
  {
  'name': 'white',
  'hex': '#FFFFFF'
  },
  {
  'name': 'black',
  'hex': '#000000'
  },
  {
  'name': 'gray',
  'hex': '#808080'
  },
  {
  'name': 'brown',
  'hex': '#A52A2A'
  }
  ]
  var shade;
  console.log("We're in");
  for (var i = 0; i < 2; i++) {
    console.log(parents);
    // if (hexColor === parents[i]['hex']) {
    //   shade = parents[i]['name'];
    //   console.log(shade);
    //   return shade;
    // }
  }
}

shadeOfWhat(test, zoot);

module.exports = shadeOfWhat
