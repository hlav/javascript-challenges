module.exports = {
  person: function() {
  var person = {firstName: "John", lastName: "Mayer"};

return person;

  },

  sweetnessProperty: function(obj){
  return obj["sweetness"];},




savorynessProperty: function(obj){
return obj["savory-ness"];

},

keys: function(obj){
return Object.keys(obj);


},

sortedKeys: function(obj){
// var keys =[]
// if (Object.keys({}).length ==0){
//   return keys
// };
// else{
//   keys = Object.keys(obj);
//     return keys.sort;}

var array = [];
 for (var key in obj) {
   array.push(key);
 }
 array.sort();
 return array;
},







reverseSortedKeys: function(obj){
    var keys =[];
    keys = Object.keys(obj);
    keys.sort();
    keys.reverse();
    return keys;
  }
  }
