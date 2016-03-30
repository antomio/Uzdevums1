
(function($) {

	$("#button").on("click", function(e) {
		e.preventDefault();

		showPermutationResultFromInput("#red", "#alert");
		showPermutationResultFromInput("#black", "#alert2");
  });

	$("#black").on("keyup", function() {
		showPermutationResultFromInput("#black", "#alert2", true);
	});

})(jQuery);

	function showPermutationResultFromInput(inputSelector, outputSelector, skipValueCheck) {
		var result = permutation( $(inputSelector).val(), skipValueCheck );
		$(outputSelector).text(result);
	}

	function permutation(value, skipValueCheck) {
		if(skipValueCheck == undefined) {
			skipValueCheck = false;
		}

		if (isNaN(value) || (!skipValueCheck && value < 1)) {
			return value;
		}

		for(var total = 1; value>0; value--){
			total=total*value;
		}

		return total;
	};

	function myValue3(a) {
		if (isNaN(a)) {
			return;
		}

		else {

			for(var total = 1; value>0; value--){
				total=total*value;
			}

			$("#alert2").text(total);

			return total;
		}
	};