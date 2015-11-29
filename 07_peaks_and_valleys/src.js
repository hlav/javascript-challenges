/*
  The primary goal of this warm-up is to work on refactoring
  out duplicated code. As you build the peaks and valleys
  methods, some duplication will arise. Get the tests passing
  first and then refactor to remove the duplication.

  Note: The peaks/valleys are fun to console.log out while
  writing these methods.
*/

module.exports = {
  peak: function() {
    return '/\\'
    // your code here
  },

  valley: function(){
    return '___';


  },
  peaks: function(n){
    var peaker = "/\\";
    peaker = peaker + peaker + peaker;
  return peaker;

},
valleys: function(n){
 var valle = "___"
 valle = valle + valle;
 return valle;

},

peaksAndValleys: function(p, v){
var result = ''
peak = "/\\";
valley = "___"
for (var i = 1; i <= p; i++) {
  result = result + peak
}
for (var z = 1; z <= v ; z++) {
result = result + valley}

return result;
}
}
