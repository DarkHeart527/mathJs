mathJs = {
 random: function() {
  return Math.random();
 },
 exp: function(num, exp) {
  var number;
  var startNum = num;
  for (let i = 0; i < exp; i++) {
   num = num * startNum;
   number = num;
  }
  return number;
 },
}
