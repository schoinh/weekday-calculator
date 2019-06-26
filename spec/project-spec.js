import { Date } from './../src/backend-code.js';

describe('Weekday Calculator', function() {

  it('should save a date as a Date object', function() {
    const inputDate = new Date (2019, "July", 3);
    expect(inputDate.year).toEqual(2019);
    expect(inputDate.month).toEqual("July");
    expect(inputDate.dayOfMonth).toEqual(3);
  });

  it('should convert the month to a number', function() {
    const inputDate = new Date (2019, "July", 3);
    inputDate.convertDate();
    expect(inputDate.year).toEqual(2019);
    expect(inputDate.month).toEqual(5);
    expect(inputDate.dayOfMonth).toEqual(3);
  });

  it('should convert year to work in formula', function() {
    let inputDate1 = new Date (2019, "January", 3);
    inputDate1.convertDate();
    expect(inputDate1.year).toEqual(2018);
    let inputDate2 = new Date (2019, "February", 3);
    inputDate2.convertDate();
    expect(inputDate2.year).toEqual(2018);
    let inputDate3 = new Date (2019, "March", 3);
    inputDate3.convertDate();
    expect(inputDate3.year).toEqual(2019);
  });

  it('should get first 2 and last 2 digits of Y', function() {
    let inputDate = new Date (2019, "January", 3);
    inputDate.convertDate();
    expect(inputDate.y).toEqual(18);
    expect(inputDate.c).toEqual(20);
  });

  it('should calculate the day of the week', function() {
    let inputDate = new Date (2019, "January", 3);
    inputDate.convertDate();
    inputDate.getDayOfWeek();
    expect(inputDate.dayOfWeek).toEqual(4);
  });

  it('should convert day of week to name of day', function() {
    let inputDate1 = new Date (2019, "January", 3);
    inputDate1.getOutput();
    expect(inputDate1.dayOfWeek).toEqual("Thursday");
    let inputDate2 = new Date (2021, "March", 3);
    inputDate2.getOutput();
    expect(inputDate2.dayOfWeek).toEqual("Wednesday");
    let inputDate3 = new Date (1991, "January", 19);
    inputDate3.getOutput();
    expect(inputDate3.dayOfWeek).toEqual("Saturday");
  });
})
