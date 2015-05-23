function findNthDigit(arr) {
	var sum = 1 ;
	if(arr[1]<0){
		arr[1] =arr[1]*(-1) ;
	}
	arr[1] = arr[1].toString();
	var result = arr[1].split(".");
	var string = '' ;

	for(var j = 0 ; j< result.length ; j++){
		string = string+result[j] ;
	}
	for(var i = 0 ; i< arr[0]-1 ; i++){
		sum = sum*10 ;

	}
	string = parseInt(string) ;
	string = Math.floor(string/sum) ;
	if(string%10 == 0){
		console.log("The number doesn’t have " + arr[0] + " digits") ;
	}
	else
	{
		console.log(string%10) ;
	}
	//return Math.floor(arr[1]%10) ;
}
findNthDigit([1, 6]) ;
findNthDigit([6, 923456]);
findNthDigit([2, -55]);
findNthDigit([3, 1451.78]);
findNthDigit([6, 888.88]);