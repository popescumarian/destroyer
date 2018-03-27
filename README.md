# destroyer
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. <br />
Remove all elements from the initial array that are of the same value as these arguments.<br />
destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].<br />
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].<br />
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].<br />
destroyer([2, 3, 2, 3], 2, 3) should return [].<br />
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
