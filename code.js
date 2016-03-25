
(function($) {

	$("#button").on("click", function(e) {
		e.preventDefault();
		myValue($( "input[type='text']" ).val());
  });
	
})(jQuery);

	function myValue(s) {

		if (isNaN(s) || s < 1) {
			alert("Tabulā ir 0 elementu!");
		}
		else {
			for(var total = 1; s>0; s--){
				total=total*s;
			}

		console.log(total);	

			return total;
		}

	};

	

