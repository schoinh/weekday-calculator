import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getOutput, RealDate } from './backend-code';

$(function() {
  $("form#make-date").submit(function(event) {
    event.preventDefault();
    debugger;
    let dateInput = $("input").val(); // 6/26/2019 (GMT)
    let dateArray = dateInput.split("-"); // ["2019", "06", "26"]
    let realYear = dateArray[0];
    let realMonth = parseInt(dateArray[1]);
    console.log(realMonth)
    let realDate = dateArray[2];    // "26"
    dateInput = new RealDate(realYear, realMonth, realDate); // 6/25/2019 (loal)
    console.log(dateInput);   // 6/25/2019 (local)
    let dayNumber = dateInput.getDay(); // = 3
    let output = getOutput(dayNumber);
    console.log(output);
  });
});
