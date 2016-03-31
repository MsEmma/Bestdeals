exports.getArray = function(inputString) {

  inputString = (inputString.replace("0.", "0"));

  var array = inputString.split(",")

  var avoArray = [];

  array.forEach(function(str) {
    var strArray = str.split(" for R");
    avoArray.push(Number(strArray[0]));
    avoArray.push(Number(strArray[1]));
  })

  return avoArray;
}

exports.getPriceArray = function(avoArray) {

  var priceArray = [];

  for (i = 0; i < avoArray.length; i++) {
    if (i % 2 !== 0) {
      priceArray.push(Number((avoArray[i] / avoArray[i - 1]).toFixed(2)));
    }
  }

  return priceArray;
}

exports.getDealPriceMap = function(inputString, priceArray) {

  inputString = inputString.replace("0.", "0");

  var array = inputString.split(",")

  var dealPriceMap = {};

  for (i = 0; i < array.length; i++) {
    dealPriceMap[array[i]] = priceArray[i];
  }

  return dealPriceMap;

}

exports.getCheapestDeal = function(dealPriceMap, priceArray) {

  priceArray.sort();

  for (var deal in dealPriceMap) {
    if (dealPriceMap[deal] === priceArray[0]) {
      var cheapestDeal = deal;
    }
  }

  return cheapestDeal;

}

exports.getExpensiveDeal = function(dealPriceMap, priceArray) {

  priceArray.sort();

  for (var deal in dealPriceMap) {
    if (dealPriceMap[deal] === priceArray[3]) {
      var expensiveDeal = deal;
    }
  }

  return expensiveDeal;

}
