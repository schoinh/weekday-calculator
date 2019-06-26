export class Date {
  constructor(year, month, dayOfMonth) {
    this.year = year;
    this.month = month;
    this.dayOfMonth = dayOfMonth;
    this.y;
    this.c;
  }

  convertDate() {
    if (this.month === "January" || this.month === "February") {
      this.year = this.year -1;
    }
    this.c = this.year.toString();
    this.c = parseInt(this.c.charAt(0) + this.c.charAt(1));
    this.y = this.year.toString();
    this.y = parseInt(this.y.charAt(2) + this.y.charAt(3));

    const months = ["March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February"]
    this.month = months.indexOf(this.month) + 1;
  }

}
