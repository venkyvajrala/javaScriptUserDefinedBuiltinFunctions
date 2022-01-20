function forEach(inputNumbersArray,callBackFunction,startIndex=0)
{
    
    for(let index=startIndex;index<inputNumbersArray.length;index++)
    {
            callBackFunction(inputNumbersArray[index],index,inputNumbersArray);

    }
}


// test case 1
// sum=0;

// function myFunction(item,index=0,arr=[])
// {
//     sum+=item;
// }

// forEach([1,2,3,4,5],myFunction);

// console.log(sum);


// testcase 2
// numbers=[1,2,3,4,5,6];
// forEach(numbers,myFuncgtion1);
// function myFuncgtion1(item,index,arr)
// {
//     arr[index]=item*10;
// }

// console.log(numbers);