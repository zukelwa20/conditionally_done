var assert = require('assert');
var fromWhere = function(carReg){
  switch (carReg.substring(0,2)) {
  case 'CY':
  return "Bellville";
  break;

  case 'CJ':
  return "paarl";
  break;

  case 'CA':
  return "capetown";
  break;

  default:
  return "Some other place!";
    }
  };
assert.equal(fromWhere('CY 123456'),'Bellville');
assert.equal(fromWhere('CJ 456987'),'paarl');
assert.equal(fromWhere('CA 789654'),'capetown');
assert.equal(fromWhere('GP 741852'),'Some other place!');

//console.log(fromWhere('CY 123456'));
//console.log(fromWhere('CJ 456987'));
//console.log(fromWhere('CA 789654'));
//console.log(fromWhere('some other place!'));
