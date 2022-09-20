const add = function(num1,num2) {
	result = num1+num2;
    return result;
};

const subtract = function(num1,num2) {
	result = num1-num2;
    return result;
};

const sum = function(nums){

    var sums = 0;

    for(var i = 0 ; i < nums.length ; i++)
    {
    sums += nums[i];
    }
    
    if(nums.length == 0)
    {
    sums=0;
    }
    
    return sums;
    
};

const multiply = function(nums) {

    var sums = 1;
    
    for(var i = 0; i < nums.length; i++)
    {
    sums *= nums[i];
    }
    return sums;
};

const power = function(num1,num2) {
	
    result = num1 ** num2;
    return result;
    
};

const factorial = function(num) {
    var sums = 1;
    
    for(var i = num ; num > 0 ; i--)
    {
    sums *= num;
    num -= 1;        
    }
    
    return sums;
	
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
