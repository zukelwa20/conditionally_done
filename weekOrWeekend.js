var assert = require('assert');
var weekOrWeekend = function(day){
if (!day.startsWith('s')) {
    return "week";
}
else {
return "weekend";
}
};
console.log(weekOrWeekend('wednesday'));
assert.equal(weekOrWeekend('tuesday'),'week');
