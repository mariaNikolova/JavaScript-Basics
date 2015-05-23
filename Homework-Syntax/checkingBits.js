function bitCheck(value){
	value = value>>2;
	var mask = 1;
	var result = value & mask;
	if(result)
	{
		return true;
	}
	else
	{
		return false;
	}
	
}
console.log(bitCheck(333));
console.log(bitCheck(425));
console.log(bitCheck(2567564754));