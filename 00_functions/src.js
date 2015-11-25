module.exports = {

  helloWorld: function(){
  return "Hello World"},

  hello: function(string){
    return "Hello " + string;
  },

  shout: function(string) {
    return "Hello " + string.toUpperCase();
  },


whisper: function(string){
  return "Hello " + string.toLowerCase();
},

separate: function (string) {
  return string.split('');
},
reverseJoin: function (string){
  return string.reverse.join;

},
reverseJoinCompact: function (arr){
arr.reverse();
return arr.join('');

},
backwardsDay: function(str){

return "Hello " + str.split('').reverse().join('');

},

}
