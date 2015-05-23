function replaceSpaces(string){
	string = string.split(' ');
	var newString = '' ;
	for(var i = 0 ; i < string.length ; i++)
	{
		newString += string[i];
	}
	console.log(newString);
}

replaceSpaces("But you were living in another world tryin' to get your message through");