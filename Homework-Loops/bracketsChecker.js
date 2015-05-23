function checkBrackets(value) {
	var arr = [] ;
	var counterOne = 0 ;
	var counterTwo = 0 ;
	for(var i = 0 ; i<value.length ; i++){
		if(value[i]=='('){
			counterOne++ ;
		}
		else if(value[i] == ')'){
			counterTwo ++ ;
		}
	}
	if(counterOne == counterTwo){
		console.log("Correct") ;
	}
	else{
		console.log("InCorrect") ;
	}
}
checkBrackets('( ( a + b ) / 5 – d )') ;
checkBrackets(') ( a + b ) )') ;
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )') ;