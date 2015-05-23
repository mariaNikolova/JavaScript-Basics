function selectionSort (sortMe)
{
    var i, j, tmp, tmp2;
    var array = [] ;
    for (i = 0; i < sortMe.length - 1; i++)
    {
        tmp = i;
        for (j = i + 1; j < sortMe.length; j++)
            if (sortMe[j] < sortMe[tmp])
                tmp = j;
 
        tmp2 = sortMe[tmp];
        sortMe[tmp] = sortMe[i];
        sortMe[i] = tmp2;
    }
    for(var i = 0 ; i<sortMe.length ; i++){
         array[i] = sortMe[i] ;
    }
    console.log(array.join()) ;
}
selectionSort ([5, 4, 3, 2, 1]) ;
selectionSort ([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]) ;