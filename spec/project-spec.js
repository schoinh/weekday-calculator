import { monthToNum, makeDate, getDayOfWeek, convertDay } from './../src/backend-code.js';

describe('Weekday Calculator', function() {
  const year = 2019;
  const month = "June";
  const dayOfMonth = 27;

  const monthNum = monthToNum(month);
  const newDate = makeDate(year, monthNum, dayOfMonth);
  const dayOfWeekNum = getDayOfWeek(newDate);

  it('should convert the month string to a number', function() {
    expect(monthNum).toEqual(5);
  });

  it('should save user input in a Date object', function() {
    expect(newDate.getMonth()).toEqual(5);
  });

  it('should return the day of week as a number', function(){
    expect(dayOfWeekNum).toEqual(4);
  });

  it('should return the day of week as a string', function(){
    expect(convertDay(dayOfWeekNum)).toEqual("Thursday");
  });
});
