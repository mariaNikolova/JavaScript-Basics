function findMaxSequence(arr) {
	var counter = 1 ;
	var max = 0;
	var value ;
	var currentValue ;
	for(var i = 0 ; i<arr.length-1 ; i++){
		if(arr[i] === arr[i+1]){
			counter++ ;
			currentValue = arr[i] ;
		}
		else{
			if(counter>=max){
				max=counter ;
				value = currentValue ;
			}
			counter = 1 ;
		}
	}
	if(counter>=max){
		max=counter ;
		value = currentValue ;
	}
	var result = [];
	for(var j= 0 ; j<max ; j++){
		result[j] = value ;
	}
	if(arr.length == 1){
		result = arr;
	}
	return result ;
}

console.log(findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])) ;
console.log(findMaxSequence(['happy'])) ;
console.log(findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3'])) ;