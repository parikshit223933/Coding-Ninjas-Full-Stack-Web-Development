"use strict";

var first_element = document.getElementById('first');
var second_element = document.getElementById('second');

var button = document.getElementsByTagName("button")[0];
var total_time;

var switcher = false;

button.addEventListener('click', function (event)
{
    event.preventDefault();
    var input = document.getElementsByTagName('input')[0];
    total_time = input.value;
    if (total_time == "") {
        window.alert("Please enter a number");
        return;
    }
    if (total_time <= 0 || total_time > 9) {
        window.alert("Please enter a number in the given range");
        return;
    }
    input.value = "";
    start_counting();
})
function bring_first_to_front()
{
    first_element.innerText = total_time;

    first_element.style.zIndex = 1;
    second_element.style.zIndex = 0;

    first_element.style.transition = "top ease-in-out 0.3s";
    second_element.style.transitionDelay = "0.3s";

    first_element.style.top = "0px";
    second_element.style.top = "50px";

    switcher = false;
}
function bring_second_to_front()
{
    second_element.innerText = total_time;

    second_element.style.zIndex = 1;
    first_element.style.zIndex = 0;

    second_element.style.transition = "top ease-in-out 0.3s";
    first_element.style.transitionDelay = "0.3s";

    second_element.style.top = "0px";
    first_element.style.top = "50px";

    switcher = true;
}
function start_counting()
{

    let id = setInterval(function ()
    {
        if (total_time-- == 0) {
            clearInterval(id);
            return;
        }
        if (switcher) {
            bring_first_to_front();

        }
        else {
            bring_second_to_front();

        }
    }, 1000)
}



/* to add a class, element.classlist.add is used and to remove a class, element.classlist.remove is used. */