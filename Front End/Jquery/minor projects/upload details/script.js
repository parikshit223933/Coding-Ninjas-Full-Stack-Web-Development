"use strict";
/// <reference path="typings/globals/jquery/index.d.ts" />

$('body').height(window.innerHeight - 10);
function clear_all_inputs(a, b, c)
{
    a.val("");
    b.val("");
    c.val("");
}
function show_output(roll, marks, name)
{
    let aside = $('aside');

    let roll_element = " <span style='background-color:blue; color:white'> " + roll + " </span> ";
    let marks_element = " <span style='background-color:blue; color:white'> " + marks + " </span> ";
    let name_element = " <span style='background-color:blue; color:white'> " + name + " </span> ";

    let final_string = "<div class='item'>Roll no-&nbsp" + roll_element + ",&nbsp" + name_element + "&nbsphas scored&nbsp" + marks_element + "&nbspmarks.</div>";
    aside.append(final_string);
}
$('button').click(
    function (event)
    {
        event.preventDefault();
        let roll = $('#roll');
        let name = $('#name');
        let marks = $('#marks');
        if (roll.val() == "" || name.val() == "" | marks.val() == "")
        {
            window.alert("Please fill all fields!");
        }
        else
        {
            show_output(roll.val(), marks.val(), name.val());
            clear_all_inputs(roll, marks, name);
        }
    }
);