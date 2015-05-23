function compareChars(arrOne,arrTwo) {
	
	var counter =0 ;
	var isEqual = true ;
	if(arrOne.length != arrTwo.length){
		console.log("Not Equal") ;
	}
	else{
		for(var i=0 ; i<arrOne.length ; i++){
			if(arrOne[i] != arrTwo[i] ){
				isEqual = false ;
			}
		}
		if(isEqual){
			console.log("Equal") ;
		}
		else{
			console.log("Not Equal") ;
		}
	}

}
compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], 
	         ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']) ;
compareChars(['3', '5', 'g', 'd'] , ['5', '3', 'g', 'd']) ;
compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],
			 ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']) ;