function findMostFreqNum(enteredArray){
	var currCounter = 1;
	var counter = 0;
	var value;
	var index;
	for(var i = 0 ; i < enteredArray.length ; i++)
	{
		index = i; 
		for(var j = 0 ; j < enteredArray.length ; j++)
		{
			if(index != j)
			{
				if(enteredArray[i] == enteredArray[j])
				{
					currCounter++;
				}
			}
		}
		if(currCounter > counter)
		{
			counter = currCounter;
			value = enteredArray[i];
		}
		currCounter = 1;
	}

	console.log(value + "(" + counter + " times)");

} 

findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
