export class RealDate extends Date {
  constructor(year, month, date) {
    super();
    this.year = year;
    this.month = month;
    this.date = date;
  }
}

const getOutput = function(number) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[number];
}
