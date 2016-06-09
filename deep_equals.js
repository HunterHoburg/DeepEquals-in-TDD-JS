function deepEquals(valA, valB) {
  var x; var y;
  for (var key in valA) {
    console.log('this is the key '+key);
    var x = valA[key];
    var y = valB[key];
    if (!Object.is(x,y)) {return false;}
  }
  return true
}

module.exports = deepEquals;
