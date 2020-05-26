/// <reference path="typings/globals/jquery/index.d.ts" />

var sol_input = $('#sol input');
var page_input = $('#page-no input');
var button = $('#div-button button');

button.click(function (event)
{
    event.preventDefault();
    if (sol_input.val() == "" || page_input.val() == "")
    {
        window.alert('Please fill all the fields');
        return;
    }
    $.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos",
        {
            sol:sol_input.val(),
            api_key:"zrVafsMHD8r1SC8mHyg91mnNguuzdIoPRXGD1BvS",
            page:page_input.val(),
        })
        .done(function(data)
        {
            $('img').remove();

            for(let photo of data.photos)
            {
                let current_url= photo.img_src;
                $('#container2').append($(document.createElement('img')).attr('src', current_url));
            }
        })
        .fail(function()
        {
            console.log('request failed');
            window.alert('failed');
            return;
        })
})