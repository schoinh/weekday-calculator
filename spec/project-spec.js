import { getOutput } from './../src/backend-code.js';

describe('Weekday Calculator', function() {

  it('should save a date as a Date object', function() {
    const inputDate = new Date (2019, 0, 3);
    expect(inputDate.getFullYear()).toEqual(2019);
    expect(inputDate.getMonth()).toEqual(0);
    expect(inputDate.getDate()).toEqual(3);
  });

  it('should calculate the day of the week', function() {
    let inputDate = new Date (2019, 0, 3);
    expect(inputDate.getDay()).toEqual(4);
  });

  it('should convert day of week to name of day', function() {
    let inputDate1 = new Date (2019, 0, 3);
    expect(getOutput(inputDate1.getDay())).toEqual("Thursday");
    let inputDate2 = new Date (1991, 0, 19);
    expect(getOutput(inputDate2.getDay())).toEqual("Saturday");
  });
});
