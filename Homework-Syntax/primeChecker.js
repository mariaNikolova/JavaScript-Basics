function isPrime(value){
	var maxDivider = Math.sqrt(value) ;
	var divider= 2 ;
	var isPrime = true ;
	while(isPrime && (divider<=maxDivider)){
		if(value%divider==0){
			isPrime=false ;
		}
		divider++ ;
	}
	if(isPrime){
		console.log(true) ;
	}
	else{
		console.log(false) ;
	}
}
isPrime(7) ;
isPrime(254) ;
isPrime(587) ;