function findMinAndMax(value) {
	
	var min = Math.min.apply(null, value);
    var max = Math.max.apply(null, value);
    return {
        'Min': min,
        'Max': max
    };
}
console.log(findMinAndMax([9, 2, 1, 15, 20, 5, 7, 31])) ;
console.log(findMinAndMax([2, 2, 2, 2, 2])) ;
console.log(findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12])) ;