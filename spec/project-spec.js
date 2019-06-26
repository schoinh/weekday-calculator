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
    inputDate.convertMonth();
    expect(inputDate.year).toEqual(2019);
    expect(inputDate.month).toEqual(5);
    expect(inputDate.dayOfMonth).toEqual(3);
  });

})
