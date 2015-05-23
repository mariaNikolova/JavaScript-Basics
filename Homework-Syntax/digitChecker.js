function checkDigit(value){
	value=Math.floor(value/100) ;
	
	if(value%10==3){
		return true ;
	}
	else{
		return false ;
	}
	
}
console.log(checkDigit(1235));
console.log(checkDigit(256368));
console.log(checkDigit(123456));