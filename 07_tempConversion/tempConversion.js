const ftoc = function(degree) {
var celc = (degree - 32) * (5/9);
result = Math.round(celc * 10) / 10;
return result;
};

const ctof = function(degree) {
var fah = (degree * (9/5) + 32);
result = Math.round(fah * 10) / 10;
return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
