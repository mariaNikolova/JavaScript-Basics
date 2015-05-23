function printNumbers(n) {
	if(n>0){
		for(var i=1 ; i<=n ; i++){
			if(i%4!=0 && i%5!=0){
				var result=console.log(i) ;
			}
		}
	}
	else{
		console.log("no") ;
	}
	return result ;
	
}
printNumbers(20) ;
printNumbers(-5) ;
printNumbers(13) ;