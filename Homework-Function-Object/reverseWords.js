function reverseWordsInString(str) {
	var string = str.split(" ") ;
	var result = [] ;
	for(var i = 0 ; i<string.length ; i++){
		result[i] = reverse(string[i]) ; 
	}
	console.log(result.join(' ')) ;
}
function reverse(word){
	var result=[] ;
	for(var i = 0 ; i<word.length ; i++){
		result += word[word.length - 1 - i] ;
	}
	return result ;
}
reverseWordsInString("Hello, how are you.") ;
reverseWordsInString("Life is pretty good, isn’t it?") ;