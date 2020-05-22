"use strict";

var first_element = document.getElementById('first-one');
var second_element = document.getElementById('second-one');

var button = document.getElementsByTagName("button")[0];
var total_time;







button.addEventListener('click', function (event)
{
    event.preventDefault();
    var input = document.getElementsByTagName('input')[0];
    total_time = parseInt(input.value);
    if (total_time == "") {
        window.alert("Please enter a number");
        return;
    }
    input.value = "";
})


