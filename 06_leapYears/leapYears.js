const leapYears = function(year){

    //divisible by 4
    //if divisible by 100 not leap year
    //if divisible by 400 leap year

 if(year % 4 == 0 ){
    if((year % 100 == 0 ) && (year % 400 != 0))
    {
    return false;
    }
    else
    {
    return true;
    }

}

else
{
return false;
}

}

// Do not edit below this line
module.exports = leapYears;
