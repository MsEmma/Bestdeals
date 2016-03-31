var assert = require("assert");
var fruition = require("../fruition");

describe("fruition", function() {

  it("should return a fruit map from the input JSON", function() {
    var result = fruition.getFruitMap({
      "woolingsworth": {"apples": 4,"bananas": 3,"oranges": 12},
      "chockers": {"bananas": 2,"apples": 5,"oranges": 4 },
      "pickle pay": {"bananas": 4,"oranges": 7},
      "shopwrong": {"apples": 2,"bananas": 3},
      "kwakspar": {"oranges": 9,"apples": 4} });
    assert.deepEqual(result, { apples:
   [ { shop: 'woolingsworth', quantity: 4 },
     { shop: 'chockers', quantity: 5 },
     { shop: 'shopwrong', quantity: 2 },
     { shop: 'kwakspar', quantity: 4 } ],
  bananas:
   [ { shop: 'woolingsworth', quantity: 3 },
     { shop: 'chockers', quantity: 2 },
     { shop: 'pickle pay', quantity: 4 },
     { shop: 'shopwrong', quantity: 3 } ],
  oranges:
   [ { shop: 'woolingsworth', quantity: 12 },
     { shop: 'chockers', quantity: 4 },
     { shop: 'pickle pay', quantity: 7 },
     { shop: 'kwakspar', quantity: 9 } ] });
  });

  it("should find the seller of the cheapest oranges", function() {
    var result = fruition.getCheapOrangesSeller("processedObject");
    assert.deepEqual(result, "Chockers");
  });

  it("should return the prices and sellers of apples, order ascending by price", function() {
    var result = fruition.getApplePricesSellersAsc("processedObject");
    assert.deepEqual(result, "ordered apple price sellers map");
  });

  it("should return the prices and sellers of apples, order descending by price", function() {
    var result = fruition.getApplePricesSellersDesc("processedObject");
    assert.deepEqual(result, "ordered apple price sellers map");
  });

  it("should return the cheapest fruit", function() {
    var result = fruition.getCheapFruit("processedObject");
    assert.deepEqual(result, ["bananas","apples"]);
  });

  it("should return the seller of the fruit with the lowest price", function() {
    var result = fruition.getCheapFruitSeller("processedObject");
    assert.deepEqual(result, ["shopwrong", "chockers"]);
  });

  it("should return all the shops that sell oranges", function() {
    var result = fruition.getOrangesSellers("processedObject");
    assert.deepEqual(result, ["woolingsworth","chockers","pickle pay","kwakspar"]);
  });

});
