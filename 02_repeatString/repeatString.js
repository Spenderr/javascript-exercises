
var string,
    i,
    num;

function repeatString(string,num){

var repeatedString = '';
    
for(i = 0; i < num; i++){
    
    repeatedString += string;
    
}
if(num < 0){
    return 'ERROR';

}
else if(num >= 0){    
    return repeatedString;
}
    
};

// Do not edit below this line
module.exports = repeatString;
