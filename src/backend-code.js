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
