// console.log('Jeejs!');

// var pin;

// $(document).ready(function() {
// 	$('#submit-signup').on('click', function(e) {
// 		e.preventDefault();
// 		var data = {
// 			name: $('#name').val(),
// 			pwd:  $('#password').val(),
// 			to:   $('#phone').val(),
// 		};
// 		console.log(data)
// 		$.post('https://api01.highside.net/start/B1m-ngv9g', JSON.stringify(data), function(res) {
// 			pin = res;
// 			console.log('res', res)
// 			console.log('pin', pin)
// 			window.location = '/verify.html'
// 		});
// 	});

// 	if ( document.getElementById('submit-verification') ) {
// 		setTimeout(function() {
// 			console.log(pin)
// 		}, 1000);
// 	}
// 	$('#submit-verification').on('click', function(e) {
// 		console.log('VRIFY')
// 		e.preventDefault();
// 		var entered_pin = $('#pin').value();
// 		if (entered_pin == pin) {
// 			console.log('SUCCESSSS')
// 		} else {
// 			console.log('FAILED')
// 		};
// 	});
// });