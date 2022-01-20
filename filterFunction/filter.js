function filter(inputNumbersArray,callBackFunction,startIndex=0)
{

    output=[];
    outputIndex=0;
    for(let index=startIndex;index<inputNumbersArray.length;index++)
    {
        if(callBackFunction(inputNumbersArray[index]))
        {
            output[outputIndex++]=inputNumbersArray[index];
        }
    }
    return output;
}

// testcase 1
// function lessThanFive(num)
// {
//     return num<5;
// }

//filters array from given function ,startIndex optional
// result=filter([1,2,3,4,5,6,7],lessThanFive);
// console.log(result);

//testcase 2 
//filters from given index
// result2=filter([1,2,3,4,5,6,7,8,9,10],lessThanFive,2);
// console.log(result2);