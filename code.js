
(function($) {

	$("#button").on("click", function(e) {
		e.preventDefault();
		myValue($( "#red" ).val());
		myValue2($( "#black" ).val());

	$("#black").on("keyup", function() {
		myValue2($( "#black" ).val());

	});
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

		// console.log(total);
		// console.log($("#black").val());

		

		$("#alert").text(total);

		return total;

		}

	};

	
	function myValue2(a) {

		console.log(a);

		if (isNaN(a) || a < 1) {
			alert("Tabulā ir 0 elementu!");
		}

		else {
			for(var total = 1; a>0; a--){
				total=total*a;
			}

		// console.log(total);

		// console.log($("#black").val());

		$("#alert2").text(total);

		return total;

		}

	};


