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
