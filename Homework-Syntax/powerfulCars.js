function convertKWtoHP(value) {
	var hp = value*1.34102209 ;
	 return hp.toFixed(2);
}
console.log(convertKWtoHP(75));
console.log(convertKWtoHP(150));
console.log(convertKWtoHP(1000));