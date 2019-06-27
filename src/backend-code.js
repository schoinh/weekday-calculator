export const checkYear = function (number) {
  if (number > 999 && number < 10000) {
    return true;
  } else {
    return false;
  }
}

export const checkLeapYear = function (year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

export const dateRange = function (year, month) {
  const longMonths = [0, 2, 4, 6, 7, 9, 11];
  if (longMonths.includes(month)) {
    return 31;
  } else if (checkLeapYear(year) === true && month === 1) {
    return 29;
  } else if (month === 1) {
    return 28;
  } else {
    return 30;
  }
}

export const monthToNum = function (monthString) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return months.indexOf(monthString);
}

export const makeDate = function (year, month, dayOfMonth) {
  return new Date (year, month, dayOfMonth);
}

export const getDayOfWeek = function (date) {
  return date.getDay();
}

export const convertDay = function (number) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[number];
}
