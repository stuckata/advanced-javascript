(function(){
	function printArgsInfo(){
		for (var i = 0; i <= arguments.length - 1; i++) {
			var argument = arguments[i];
			console.log(argument + ' (' + typeOfArgument(argument) + ')');
		};
	};

	function typeOfArgument(argument){
		if (typeof argument === 'object' && argument != null) {
			return argument.constructor === Array ? 'array' : 'object';
		}
		return typeof argument;
	};

	printArgsInfo(2, 3, 2.5, -110.5564, false);
	printArgsInfo(null, undefined, "", 0, [], {});
	printArgsInfo([1, 2], ["string", "array"], ["single value"]);
	printArgsInfo("some string", [1, 2], ["string", "array"], 
		["mixed", 2, false, "array"], {name: "Peter", age: 20});
	printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]]);
})();