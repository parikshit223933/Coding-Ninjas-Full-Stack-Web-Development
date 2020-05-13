/* var outerdiv=document.getElementById('outer'); */
/* function inside()
{
    outerdiv.innerText="over";
}
function out()
{
    outerdiv.innerText="out";
} */


/* var outerdiv=document.getElementById("outer");
outerdiv.addEventListener('mouseover', inside);
outerdiv.addEventListener('mouseout', out); */

/* var searchinput=document.getElementById('search');
searchinput.addEventListener('keypress', key_press_indication); */

/* document.addEventListener('keypress', key_press_indication); */

/* document.addEventListener('keydown', key_press_indication); */

/* document.addEventListener('keyup', inside); */
/* document.addEventListener('keydown', function (event)
{
    console.log(event.key);
}); */
/* document.addEventListener('wheel', function(event)
{
    console.log(event);
}); */
document.getElementById('search').addEventListener('keydown', function(event)
{
    console.log(event.keyCode);
});