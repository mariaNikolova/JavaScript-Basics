function findMostFreqWord(string){
	string = string.split(/\W+/);

	var arrayWords = new Array();
	var arrayValues = new Array();

	var counter = 0;
	var indexArrayWords = -1;
	var isIn = false;

	for(var i = 0 ; i < string.length ; i++)
	{	
		for(var f = 0 ; f < arrayWords.length && !isIn ; f++)
		{
			if(arrayWords[f].toLowerCase() == string[i].toLowerCase())
			{   
				isIn = true;
			}
		}
		if(!isIn)
			{
				indexArrayWords++;
				arrayWords[indexArrayWords] = string[i].toLowerCase();
			}
			
		if(!isIn)
		{	
			for(var j = 0 ; j < string.length ; j++)
			{   
				if(string[i].toLowerCase() == string[j].toLowerCase())
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


	for(var i = 0 ; i <= indexArrayWords ; i++ )
	{	
			
			if(arrayValues[i] == maxValue)
			{
				console.log(arrayWords[i] + " -> " + maxValue + " times");
			}
	
	}
	
}

//findMostFreqWord("in the middle of the night");
findMostFreqWord("Welcome to SoftUni. Welcome to Java. Welcome everyone.");
//findMostFreqWord("Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.");
