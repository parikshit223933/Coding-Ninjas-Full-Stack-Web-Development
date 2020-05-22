"use strict";

var first_element=document.getElementById('first');
var second_element=document.getElementById('second');

var button=document.getElementsByTagName("button")[0];
var total_time;

var switcher=false;

button.addEventListener('click', function(event)
{
    event.preventDefault();
    var input=document.getElementsByTagName('input')[0];
    total_time=input.value;
    if(total_time=="")
    {
        window.alert("Please enter a number")
        return;
    }
    input.value="";
    start_counting();
})
function bring_first_to_front()
{
    first_element.innerText=total_time;

    first_element.style.height="0px";
    first_element.style.zIndex=1;
    let height_counter=0;
    let id=setInterval(function()
    {
        first_element.style.height=(height_counter++).toString()+"px";
        if(height_counter>50)
        {
            clearInterval(id);
            return;
        }
    }, 1);

    second_element.style.zIndex=0;
    switcher=false;
}
function bring_second_to_front()
{
    second_element.innerText=total_time;

    second_element.style.height="0px";
    second_element.style.zIndex=1;
    let height_counter=0;
    let id=setInterval(function()
    {
        first_element.style.height=(height_counter++).toString()+"px";
        if(height_counter>50)
        {
            clearInterval(id);
            return;
        }
    }, 110);

    first_element.style.zIndex=0;
    switcher=true;
}
function start_counting()
{
    
    let id=setInterval(function()
    {
        if(total_time--==0)
        {
            clearInterval(id);
            return;
        }
        if(switcher)
        {
            bring_first_to_front();
        }
        else
        {
            bring_second_to_front();
        }
    }, 1000)
}
