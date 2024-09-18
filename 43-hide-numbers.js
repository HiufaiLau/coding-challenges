function func(num) {
  let count = 0;
  let shapeStages = [];

  while (num >= 10) {
    let digits = num.toString().match(/\d/g).map(Number);
    shapeStages.push("#".repeat(digits.length));
    num = digits.reduce((a, b) => a + b);

    count++;
  }

  shapeStages.push("#".repeat(num.toString().length));
  return shapeStages.join("\n");
}

func(1679583);
// #######
// ##
// ##
// #

func(12345);
// ######
// ##
// #

func(10);
// ##
// #
