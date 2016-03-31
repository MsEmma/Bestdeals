var assert = require("assert");
var avo = require("../avo");

describe("avo", function() {
  it("should convert the string into an array (split out the quantity and the price", function() {
    var result = avo.getArray("1 for R3, 2 for R7, 3 for R10, 5 for R14.50.");
    assert.deepEqual(result, [1, 3, 2, 7, 3, 10, 5, 14.50]);
  });

  it("should take an array as an input and calculate the Price Per Avo for each deal", function() {
    var result = avo.getPriceArray([1, 3, 2, 7, 3, 10, 5, 14.50]);
    assert.deepEqual(result, [3, 3.5, 3.33, 2.9]);
  });

  it("should return a deal price map", function() {
    var result = avo.getDealPriceMap("1 for R3, 2 for R7, 3 for R10, 5 for R14.50.", [3, 3.5, 3.33, 2.9]);
    assert.deepEqual(result, {
      '1 for R3': 3,
      ' 2 for R7': 3.5,
      ' 3 for R10': 3.33,
      ' 5 for R14.50': 2.9
    });
  });

  it("should find the cheapest deal", function() {
    var result = avo.getCheapestDeal({
      '1 for R3': 3,
      ' 2 for R7': 3.5,
      ' 3 for R10': 3.33,
      ' 5 for R14.50': 2.9
    }, [3, 3.5, 3.33, 2.9]);
    assert.equal(result, " 5 for R14.50");
  });

  it("should find the most expensive deal", function() {
    var result = avo.getExpensiveDeal({
      '1 for R3': 3,
      ' 2 for R7': 3.5,
      ' 3 for R10': 3.33,
      ' 5 for R14.50': 2.9
    }, [3, 3.5, 3.33, 2.9]);
    assert.equal(result, " 2 for R7");
  });

  it("should find the average price across all the deals", function() {
    var result = avo.getAveragePrice([3, 3.5, 3.33, 2.9]);
    assert.equal(result, 3.18);
  });

});
