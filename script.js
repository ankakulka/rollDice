function roll() {

	return Math.ceil(6* Math.random());

}


function roll() {
	return Math.ceil(6 * Math.random());
}


function repeat(num, func) {

for (var i = 0; i < num; i++) {
	console.log(roll()); 
}
}

repeat(10, roll());


