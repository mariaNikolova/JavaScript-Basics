function findLargestBySumOfDigits(nums){
	var maxValue = Number.MIN_VALUE ;
	var isUndef = true ;
	var value ;
	for(var i = 0 ; i<nums.length && isUndef; i++){
		
		
			if(sumOfDigits(nums[i]) > maxValue){
				maxValue = sumOfDigits(nums[i]) ;
				value = nums[i] ;
			}
		
	}
	if(value%10 == value){
		return undefined ;
	}else{
		return value ;
	}
	
}
function sumOfDigits(number){
	var value = 0 ;
	if(number<0)
	{
		number = number*(-1) ;
	}
	
	 
		while(number>1){
			value = value+(Math.floor(number%10)) ;
			number = number/10;
		}
	
	return Math.floor(value) ;
}
console.log(findLargestBySumOfDigits([5, 10, 15, 111])) ;
console.log(findLargestBySumOfDigits([33, 44, -99, 0, 20])) ;
console.log(findLargestBySumOfDigits('hello')) ;
console.log(findLargestBySumOfDigits([5, 3.3])) ;
console.log(findLargestBySumOfDigits([111.55, 222.78, 23.42, 525.33]));