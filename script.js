/*
	WEB 303 Assignment 1 - jQuery
	Emanueli Camila Ubiali Monteiro
	ID 0791137
*/



	$(document).ready(function(){   	// To write the code inside a jQuery document ready function.
	
		$("input").change(function(){     // I used "change", not "keyup").
		
			let salary = $('#yearly-salary').val();
			let percent = $('#percent').val();
			let total = (salary * percent / 100).toFixed(2);  // Math assistance - salary * percent / 100. I used toFixed to round the number to dollars and cents to get rid of extra decimal places
			
			$('amount').text('$' + total); 
			
		});
		
	});