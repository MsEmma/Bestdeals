var assert = require ("assert");
var avo = require ("../avo");

describe ("avo", function(){
  it ("should convert the string into an array (split out the quantity and the price)", function(){
    var result = avo.getArray("1 for R3, 2 for R7, 3 for R10, 5 for R14.50.");
    assert.deepEqual(result, [1,3,2,7,3,10,5,14.50]);
  });
  it ("should take an array as an input and calculate the Price Per Avo for each deal);", function(){
    var result = avo.getArray([1,3,2,7,3,10,5,14.50]);
    assert.deepEqual(result, [3,3.5,3.33,2.9]);
  });
  it ("should find the cheapest deal)", function(){
    var result = avo.getArray([3,3.5,3.33,2.9]);
    assert.deepEqual(result, "5 for R14.50");
  });
  it ("should find the most expensive deal)", function(){
    var result = avo.getArray([3,3.5,3.33,2.9]);
    assert.deepEqual(result,  "2 for R7");
  });
  it ("should find the average price across all the deals)", function(){
    var result = avo.getArray([3,3.5,3.33,2.9]);
    assert.deepEqual(result, 3.18);
  });

});
