'use strict';

(function () {
	function printArgsInfo() {
		for (var i = 0; i <= arguments.length - 1; i++) {
			var argument = arguments[i];
			console.log(argument + ' (' + typeOfArgument(argument) + ')');
		}		;
	}	;
	
	function typeOfArgument(argument) {
		if (typeof argument === 'object' && argument != null) {
			return argument.constructor === Array ? 'array' : 'object';
		}		;
		return typeof argument;
	}	;
	
	printArgsInfo.call(null, 2, 3, 2.5, -110.5564, false);
	printArgsInfo.apply(null, [2, 3, 2.5, -110.5564, false]);
})();

