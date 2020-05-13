var inner_div=document.getElementById('inner');
inner_div.addEventListener('click', function(event)
{
    console.log('click inner div');
    event.stopPropagation();//to stop the propagation use this
});

var outer_div=document.getElementById('outer');
outer_div.addEventListener('click', function()
{
    console.log('click outer div');
});