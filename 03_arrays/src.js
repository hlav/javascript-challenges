module.exports = {

  first: function(array) {
  return array[0];
},

last: function (array) {
  return array[array.length-1]
},

empty: function (array) {
if (array.length == 0){return true;}
else {
  return false;
}
},

first_n: function(array, n){
var splc = array.splice(0,n);
return splc;

},
last_n: function(array, n){
  var splc = array.splice(-n,n)
  return splc;

},
drop: function(array, n) {
var splc = array.splice(n, n);
return splc;
},
union: function(array1, array2){
return array1.concat(array2);
},

intersection: function(array1, array2){
  var pushed =[];


    for (var i = 0; i < array1.length; i++){

    if(array2.indexOf(array1[i]) > -1){
      pushed.push(array1[i]);
      }

  }
return pushed;
}

}
