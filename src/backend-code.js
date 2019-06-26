export class Date {
  constructor(year, month, dayOfMonth) {
    this.year = year;
    this.month = month;
    this.dayOfMonth = dayOfMonth;
  }

  convertMonth() {
    const months = ["March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February"]
    this.month = months.indexOf(this.month) + 1;
  }
}
