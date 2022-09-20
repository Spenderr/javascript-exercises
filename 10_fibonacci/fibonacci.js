
//f(n)= f(n-1) + f(n-2)
const fibonacci = function(seq) {
var newSeq;

var fib = [0,1];
 
/*    
if(seq <= 1)
{
    return seq;
}
*/
if(seq < 0)
{
return "OOPS";
}

for(i = 1 ; i <= seq ; i++)
{
 var n1 = fib[i]    
 var n2 = fib[i-1]   
 newSeq = n1 + n2; 
 fib.push(newSeq);
}
    
return fib[seq];    
};

// Do not edit below this line
module.exports = fibonacci;
