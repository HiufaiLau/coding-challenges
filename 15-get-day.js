// get the day of the week
// Print the day of the week indicated by the date for each line of input on a separate line.
// Return day for date (MM/DD/YYYY)
// Note that myDate contains the date in string format

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const d = new Date();

console.log(days[d.getDay()]);
