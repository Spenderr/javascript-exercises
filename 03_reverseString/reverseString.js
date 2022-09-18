var string;



function reverseString(string){

var reversed = '';    
var c = 0;
var i = 0;
    

while(i<=string.length){
    
    reversed += string.charAt(string.length - c);

    c++;
    i++;
    
}

return reversed;
};

// Do not edit below this line
module.exports = reverseString;
