function reduce(inputNumbersArray, callBackFunction, startIndex = 0) {
	finalResult = 0;
	for (let index = startIndex; index < inputNumbersArray.length; index++) {
		let currentValue = inputNumbersArray[index];
		finalResult = callBackFunction(finalResult, currentValue);
	}
	return finalResult;
}

// function getSum(total,num)
// {
//     return total+Math.round(num);
// }
// numbers=[15.5,2.3,1.1,4.7]
// result =reduce(numbers,getSum,0);

// console.log(result);
// console.log(numbers.reduce(getSum,0))
