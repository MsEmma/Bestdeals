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

// exports.getPriceMap = function(inputString,priceArray){



// }
