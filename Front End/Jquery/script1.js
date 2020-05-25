/// <reference path="typings/globals/jquery/index.d.ts" />
//tsd install jquery --save
$('#para1').css(
    {
        fontSize: "30px",
        color: "red",
    }
);
$('div').css(
    {
        "background-color": "rgba(50, 50, 50, 1)",
        "width": "50px",
        "height": "50px",
    }
)
/* $('div').click(
    function ()
    {
        window.alert('div clicked');
    }
) */
$('div').on('click', function()
{
    window.alert('div clicked');
})

$('input').click(function()
{
    $('input').val('hello buddy');
})