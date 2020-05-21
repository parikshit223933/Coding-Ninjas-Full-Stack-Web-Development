"use strict";
function add_listener_to_the_element(itr, y_pos, amount_of_scroll)
{
    itr.addEventListener('click', function ()
    {
        var id = setInterval(function ()
        {
            window.scrollBy(0, amount_of_scroll);/* here the second entry is the amount by which i want to scroll */
            if (window.pageYOffset >= y_pos) {
                clearInterval(id);
            }
        }, 1)/* this is the time after which it will scroll */
    })
}
var list = document.getElementsByClassName("horizontal-list")[0].getElementsByTagName('li');
for (let itr of list) {
    if (itr.innerText == "Home") {
        continue;
    }
    else if (itr.innerText == "About") {
        add_listener_to_the_element(itr, 400, 10);
    }
    else if (itr.innerText == "Skills") {
        add_listener_to_the_element(itr, 1000, 20);
    }
    else if (itr.innerText == "Experience") {
        add_listener_to_the_element(itr, 2000, 20);
    }
    else if (itr.innerText == "Education") {
        add_listener_to_the_element(itr, 2500, 20);
    }
    else if (itr.innerText == "Portfolio") {
        add_listener_to_the_element(itr, 4000, 25);
    }
    else if (itr.innerText == "Contact") {
        add_listener_to_the_element(itr, 4291, 40);
    }
}