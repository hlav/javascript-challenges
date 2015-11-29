/*
  Use a for loop, NOT forEach to complete each warm-up.
*/

module.exports = {

  joinWithFor: function(list) {
    var smash = "";

    for (var i = 0; i < list.length; i++) {
      smash = smash + list[i];
    }
    return smash;
  },

  joinWithForAndIndex: function(array)
  { var joiner = [];
  for (var i = 0; i < array.length; i++) {

    // joiner = array[i].join('') + array[i].index;
  joiner = joiner.concat(array[i] + i);
  }
  joiner = joiner.join('');
  return joiner;
},

joinWithoutOddCharacters: function(array){
odds = []
for (var i = 0; i < array.length; i+=2) {
  odds = odds.concat(array[i]);
}
odds = odds.join('');
return odds;

},

joinWithForAndToken: function(array, token1){
  result ='';
  for (var i = 0; i < array.length; i++) {
    result = array.join(token1);
}
  return result;
},

joinWithForAndAlternatingTokens: function(array, token1, token2){

var result = '';
for (var i = 0; i < array.length; i++) {
if (i%2 === 0){
  result = result + array[i] + token1;
}
else {
  result = result + array[i] + token2;
}
}
var newR = result.slice(0,-1);
return newR;

}



}
