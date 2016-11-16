var assert = require('assert');
var transportFee = function(shift){
  if (shift == "morning"){
    return "R20";
  }
else if (shift == "afternoon"){
  return "R10";
}
else {
  return "you pay nothing"
}
};
assert.equal(transportFee('morning'),'R20');
assert.equal(transportFee('afternoon'),'R10');
//console.log(transportFee('morning'));
//console.log(transportFee('afternoon'));
//console.log(transportFee('you pay nothing'));
