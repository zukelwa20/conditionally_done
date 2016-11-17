var assert = require('assert');
var isTransport = function(leavingTime){
  switch(leavingTime){
  case '07:15am':
  return 'train';
  break;

  case '07:45am':
  return 'myCity';
  break;

  case '08:15am':
  return 'taxi';
  break;

  default:
  return 'Ask a friend for a pick up';
 }
}
assert.equal(isTransport('07:15am'),'train');
assert.equal(isTransport('07:45am'),'myCity');
assert.equal(isTransport('08:15am'),'taxi');
assert.equal(isTransport('10:00am'),'Ask a friend for a pick up');
//console.log(isTransport('07:15am'));
