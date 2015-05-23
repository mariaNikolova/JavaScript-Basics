function findPalindromes(string) {
	var result = string.split(" ") ;
	var value ;
	for(var i = 0 ; i<result.length ; i++){
		value = result[i].toLowerCase() ;
		if(palindromes(value)){
			console.log( value) ;
			
		}
	}
}
function palindromes(value){
	
	var len = value.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (value[i] !== value[len - 1 - i]) {
           return false;
        }
    }
   return true ;
	
}

findPalindromes('There is a man, his name was Bob') ;