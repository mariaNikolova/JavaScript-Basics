function findYoungestPerson(persons) {
	var index ;
	var value = Number.MAX_VALUE ;
	for(var i =0  ; i<persons.length ; i++){
		if(persons[i].age < value){
			value = persons[i].age ;
			index = i;
		}
	}
	console.log("The youngest person is " + persons[index].firstname + " " + persons[index].lastname) ;
}
findYoungestPerson([
  { firstname : 'George', lastname: 'Kolev', age: 32}, 
  { firstname : 'Bay', lastname: 'Ivan', age: 81},
  { firstname : 'Baba', lastname: 'Ginka', age: 40}]) ;