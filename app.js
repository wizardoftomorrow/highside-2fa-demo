const express 		= require('express');
const bodyParser 	= require('body-parser');
const request 		= require('request');

const app = express();

// Create global variable for pin code
let pin = null;

// Specify where to find static files
app.use(express.static(__dirname + '/public'));
// Set body parser for incoming form data
app.use(bodyParser.urlencoded({ extended: true }));


// Route to load homepage
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

// Handle post request from homepage form
app.post('/', (req, res) => {
	/*
		TODO: 
		1. Get the data from the form and set the correct properties
		2. Make a HTTP POST request to the Highside platform.
			(To make the request simpler, you can use the included request module ( https://www.npmjs.com/package/request ))
		3. If the request was succesful, store the received pin code and redirect the user to the verify page 
			( res.sendFile(__dirname + '/public/verify.html') )
	*/
})

// Handle post request from the varify page
app.post('/verify', (req, res) => {
	/*
		TODO:
		1. Retrieve the pin entered by the user
		2. Compare the user pin to the pin received from the platform
	*/
})

app.listen(8000, () => {
	console.log('Listening on port 8000...')
})