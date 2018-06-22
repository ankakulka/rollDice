var dice = {
sides: 6,
roll: function(){
return Math.floor(6 * Math.random()) + 1;
}
}

dice.roll();
//added var keyword
//replaced ; with ,