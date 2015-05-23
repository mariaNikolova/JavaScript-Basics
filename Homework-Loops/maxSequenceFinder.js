function findMaxSequence(enteredArray){
	var currStart = 0;
	var currEnd = 0;
	var start = 0;
	var end = 0;
	var length = 0;
	var currLength = 0;

	for(var i = 0 ; i < enteredArray.length - 1 ; i++)
	{
		if(enteredArray[i] < enteredArray[i + 1])
		{
			currEnd++;
		}
		else
		{
			currLength = currEnd - currStart + 1;
			if(currLength > length)
			{
				length = currLength;
				start = currStart;
				end = currEnd;
			}
			currStart = currEnd;
			currEnd++;
		}
			
	}
			currLength = currEnd - currStart + 1;
			if(currLength > length)
			{
				length = currLength;
				start = currStart;
				end = currEnd;
			}
			
	if(length <= 2 )
	{
		console.log("no");
	}
	else
	{		
		for(var i = start + 1  ; i <= end; i++)
		{
			console.log(enteredArray[i]);
		}
	}
	
}
findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSequence([3, 2, 1]);