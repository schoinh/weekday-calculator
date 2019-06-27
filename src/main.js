import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { monthToNum, makeDate, getDayOfWeek, convertDay } from './backend-code';

$(function() {
  $("form#make-date").submit(function(event) {
    event.preventDefault();
    let inputMonth = $("#month").val();
    let inputDay = $("#day").val();
    let inputYear = $("#year").val();
    let monthNum = monthToNum(inputMonth);
    let output = convertDay(getDayOfWeek(makeDate(inputYear, monthNum, inputDay)));
    $("#stringOutput").text(output);
  });
});
