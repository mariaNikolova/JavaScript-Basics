function findCardFrequency(input){
	var string = input[0].split(/\W+/);
	string = string.filter(Boolean);

	var arrayWords = new Array();
	var arrayValues = new Array();

	var counter = 0;
	var indexArrayWords = -1;
	var isIn = false;

	for(var i = 0 ; i < string.length ; i++)
	{	
		for(var f = 0 ; f < arrayWords.length && !isIn ; f++)
		{
			if(arrayWords[f] == string[i] )
			{   
				isIn = true;
			}
		}
		if(!isIn)
			{
				indexArrayWords++;
				arrayWords[indexArrayWords] = string[i];
			}
			
		if(!isIn)
		{	
			for(var j = 0 ; j < string.length ; j++)
			{   
				if( string[i] == string[j] )
				{
					counter++;
				}
			}
		arrayValues[indexArrayWords] = counter;
		}
		counter = 0;
		isIn = false;
	}

	var maxValue = Number.MIN_VALUE;
	var index;
	for(var i = 0 ; i <= indexArrayWords ; i++)
	{
		if(maxValue < arrayValues[i])
		{
			maxValue = arrayValues[i];
			index = i;
		}
	}

	var sum = 0 ;
	for(var i = 0 ; i < arrayValues.length ; i++)
	{
		sum += arrayValues[i];
	}
	for(var i = 0; i < arrayWords.length ; i++)
	{
		arrayValues[i] = (100 / (sum / arrayValues[i]) ); 
	}
	for(var i = 0 ; i < arrayWords.length ; i++)
	{
		console.log(arrayWords[i] + " -> " + arrayValues[i].toFixed(2) + "%");
	}

}
findCardFrequency(['8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦']);
findCardFrequency(['J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠']);
findCardFrequency(['10♣ 10♥']);