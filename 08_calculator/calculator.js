const add = function(num1,num2) {
	result = num1+num2;
    return result;
};

const subtract = function(num1,num2) {
	result = num1-num2;
    return result;
};

const sum = function(nums) {
    var sums;
    if(nums == '')
    {
    sums=0;
    }
    for(var i = 0; i <= nums.length; i++)
    {
    sums += nums[i]
    }
    return sums;
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
