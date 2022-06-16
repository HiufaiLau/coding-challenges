// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

let a = [
	[18, 20],
	[45, 2],
	[61, 12],
	[37, 6],
	[21, 21],
	[78, 9],
];

let b = [];
let x = a.filter((ele) => {
	if ((ele[0] >= 55) & (ele[1] > 7)) {
		return b.push("Senior");
	} else {
		return b.push("Open");
	}
});
console.log(b);

function openOrSenior(data) {
	return data.map((x) => {
		if (x[0] >= 55 && x[1] > 7) {
			return "Senior";
		} else {
			return "Open";
		}
	});
}

//clever solution
function openOrSenior(data) {
	return data.map(([age, handicap]) =>
		age > 54 && handicap > 7 ? "Senior" : "Open",
	);
}

function openOrSenior(data) {
	// Senior = 55+ and 7+
	var result = [];

	for (var i = 0; i < data.length; i++) {
		result[i] = data[i][0] >= 55 && data[i][1] > 7 ? "Senior" : "Open";
	}

	return result;
}

function openOrSenior(data) {
	function determineMembership(member) {
		return member[0] >= 55 && member[1] > 7 ? "Senior" : "Open";
	}
	return data.map(determineMembership);
}
