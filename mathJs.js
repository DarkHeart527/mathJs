mathJs = {
 random: function() {
  return Math.random();
 },
 exp: function(num, exp) {
  var number;
  for (let i = 0; i < exp; i++) {
   num = num * num;
   number = num;
  }
  return number;
 },
}
