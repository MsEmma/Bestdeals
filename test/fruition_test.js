var assert = require("assert");
var fruition = require("../fruition");

describe("fruition", function() {

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
