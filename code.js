
(function($) {

	$("#button").on("click", function(e) {
		e.preventDefault();

		showPermutationResultFromInput("#red", "#alert");
		showPermutationResultFromInput("#black", "#alert2");
  });

	$("#black").on("keyup", function() {
		showPermutationResultFromInput("#black", "#alert2", true);
	});

	function showPermutationResultFromInput(inputSelector, outputSelector, skipValueCheck) {
		if(!(inputSelector instanceof jQuery)) {
			inputSelector = $(inputSelector);
		}
		if(!(outputSelector instanceof jQuery)) {
			outputSelector = $(outputSelector);
		}

		var result = permutation( inputSelector.val(), skipValueCheck );
		outputSelector.text(result);

		if(result > 1000000) {
			outputSelector.css("color", "blue");
		}
		else {
			outputSelector.css("color", "black");
		}
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
})(jQuery);