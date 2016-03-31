var inputJSON = {
  "woolingsworth": {
    "apples": 4,
    "bananas": 3,
    "oranges": 12
  },

  "chockers": {
    "bananas": 2,
    "apples": 5,
    "oranges": 4
  },

  "pickle pay": {
    "bananas": 4,
    "oranges": 7
  },

  "shopwrong": {
    "apples": 2,
    "bananas": 3
  },

  "kwakspar": {
    "oranges": 9,
    "apples": 4
  }
}

exports.getFruitMap = function() {

  var fruitMap = {};

  for (var shop in inputJSON) {
    for (var fruit in inputJSON[shop]) {
      if (!fruitMap.hasOwnProperty(fruit)) {
        fruitMap[fruit] = [{
          "shop": shop,
          "quantity": inputJSON[shop][fruit]
        }];
      } else {
        fruitMap[fruit].push({
          "shop": shop,
          "quantity": inputJSON[shop][fruit]
        });
      }
    }
  }

  return fruitMap;
}
