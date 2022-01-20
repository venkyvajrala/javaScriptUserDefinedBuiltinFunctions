
function map(numbersArray,callBackfunction,startIndex=0)
{

    let result=[];
    let resultIndex=0;
    for(let index=startIndex;index<numbersArray.length;index++)
    {

        result[resultIndex++]=callBackfunction(numbersArray[index]);

    }

    return result;

}



// result=map([4,16,81,100,25,16],Math.sqrt);
// console.log(result);

