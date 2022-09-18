
let min,max,i;

function sumAll(min,max){

const loopMax=max;
var total=0;
  
if(typeof(min) != typeof(max))
{
    return 'ERROR';
}
    
if(max > min){    

for(i = loopMax ; i >= min ; i--)
    {
    total = total + max;
    max = max - 1;
    }   
}

else if(min>max){

for(i = loopMax ; i <= min ; i++)
    {
    total = total + max;
    max = max + 1;
    }

}

    
if(total<0){
    total="ERROR";
}

   

      
    return total;
    
};




// Do not edit below this line
module.exports = sumAll;
