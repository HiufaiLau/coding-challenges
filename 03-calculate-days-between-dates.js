// This code calculates the number of days between two dates. It first
// converts the two strings to Date objects, then calculates the
// milliseconds between the two dates, and finally converts the
// milliseconds to days.

// The calculateDaysBetweenDates function takes two strings representing
// dates and returns the number of days between them. The getDateFromString
// function takes a string representing a date and returns a Date object.
// The getMillisecondsPerDay function returns the number of milliseconds
// in one day.

function getDateFromString(dateString) {
  return new Date(dateString);
}

function getMillisecondsPerDay() {
  return 24 * 60 * 60 * 1000;
}

function calculateDaysBetweenDates(begin, end) {
  let beginDate = getDateFromString(begin);
  let endDate = getDateFromString(end);

  if (Number.isNaN(beginDate.getTime()) || Number.isNaN(endDate.getTime())) {
    return NaN;
  }

  return Math.round((endDate - beginDate) / getMillisecondsPerDay());
}

calculateDaysBetweenDates('2020-01-01', '2020-01-02');
// calculateDaysBetweenDates('2020-01-01', '2020-01-02T00:00:00.000Z');
