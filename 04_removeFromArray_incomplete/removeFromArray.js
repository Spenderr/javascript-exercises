var array;
var factor;

function removeFromArray(array) {
    
let factor = Object.values(arguments).slice(1);
    
    for(let i = 0 ; i <array.length ; i++)
    {
        for(let j = 0 ; j < factor.length; j++)
        {
        if(typeof(array[i]) != typeof(factor[j]))
        {
        continue;
        }
        if(array[i] == factor[j])
        {
        delete array[i];
        }   
        }
    }
    return array.filter(item => item != null);
    
    
    /*    
    for(i = 0 ; i < array.length ; i++)
    {
     
    result.push(array[i]);
        
        
    if(factor1 == array[i])
    {
    result.pop();
    }
        
    else if(factor2 == array[i])
    {
    result.pop();
    }
        
    if(factor3 == array[i])
    {
    result.pop();
    }
        
    else if(factor4 == array[i])
    {
    result.pop();
    }
        

    
    else
        
    {
    continue;
    }
    }
    */

    //return result;
};

// Do not edit below this line
module.exports = removeFromArray;
