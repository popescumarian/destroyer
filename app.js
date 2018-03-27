function destroyer(arr) {
	arr = Array.from(arguments);
	var elements = arr[0]; // get the first element (the elements)
	arr.shift(); // remove first element (the elements) from arr

	var result = elements.filter(function(element){
		return arr.indexOf(element) < 0; // false if not found in arr and therefore keep it
	});

	return result;
}

console.log(destroyer(["tree", "hamburger", 53], "tree", 53));

/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.
destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3) should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
 */