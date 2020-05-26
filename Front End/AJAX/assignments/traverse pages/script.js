/// <reference path="typings/globals/jquery/index.d.ts" />

//zrVafsMHD8r1SC8mHyg91mnNguuzdIoPRXGD1BvS

var sol_input = $('#sol-input');
var get_image = $('#get-img');
var prev_page = $('#prev');
var next_page = $('#next');
var page_number = 1;
prev_page.attr('disabled', 'true');
next_page.attr('disabled', 'true');

function show_current_images(response)
{
    if (response.photos.length == 0)
    {
        window.alert('No photos are available corresponding to this Sol');
        return;
    }
    for (let photo of response.photos)
    {
        let current_photo = photo.img_src;
        $('#container3').append($(document.createElement('img')).attr('src', current_photo));
    }
}
function check_for_next_page()
{
    var more_available=true;
    $.ajax({
        method: "get",
        url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos",
        data: {
            sol: sol_input.val(),
            api_key: 'zrVafsMHD8r1SC8mHyg91mnNguuzdIoPRXGD1BvS',
            page: page_number+1,
        },
        success: function (response)
        {
            if (response.photos.length == 0)
            {
                more_available=false;
            }
        }
    });
    return more_available;
}
function call_main_function()
{
    $('img').remove();
    if (sol_input.val() == "")
    {
        window.alert('Please provide the required input');
        return;
    }
    $.ajax({
        method: "get",
        url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos",
        data: {
            sol: sol_input.val(),
            api_key: 'zrVafsMHD8r1SC8mHyg91mnNguuzdIoPRXGD1BvS',
            page: page_number,
        },
        success: function (response)
        {
            show_current_images(response);
            if (check_for_next_page())
            {
                next_page.removeAttr('disabled')
            }
            else
            {
                next_page.attr('disabled', true);
            }
            if(page_number>1)
            {
                prev_page.removeAttr('disabled')
            }
            else
            {
                prev_page.attr('disabled', true);
            }
        }
    });
}
get_image.click(call_main_function);
next_page.click(function()
{
    page_number+=1;
    call_main_function();
});
prev_page.click(function()
{
    page_number-=1;
    call_main_function();
})
