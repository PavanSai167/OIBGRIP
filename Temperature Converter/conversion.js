// Assigns the variable 'c' to an array
var c = [];	

// Loops the program block by increments of 5 until fahrenheit = 120
for (fahrenheit = 20; fahrenheit <= 120; fahrenheit += 5){

	// Calculates celsius from the input fahrenheit
	celsius = (fahrenheit - 32) * (5 / 9);
	
	// Rounds the temperature to the second decimal place if needed
	celsius = Math.round(celsius * 100) / 100;
	
	// Asigns the value of celsuis to a unique array
	c[fahrenheit] = celsius;

}
