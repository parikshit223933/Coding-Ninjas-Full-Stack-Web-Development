/// <reference path="typings/globals/jquery/index.d.ts" />


var select_breed = $('#breed');
var select_sub_breed = $('#sub-breed');
var button_get_images = $('#get-images-button');
var div_container2 = $('#container2');
select_sub_breed.hide();
var recieved_dom_data;
//adding all the options in the breeds dropdown
(function ()
{
    $.ajax({
        method: "get",
        url: "https://dog.ceo/api/breeds/list/all",
        success: function (response)
        {
            recieved_dom_data = response.message;
            for (let current_breed in response.message)
            {
                select_breed.append($('<option value="' + current_breed + '">' + current_breed + '</option>'))
            }
        }
    });
})();

setInterval(function ()
{
    if (recieved_dom_data[select_breed.val()].length != 0)
    {
        if(select_sub_breed.is(':visible'))
        {
            return;
        }
        $('#sub-breed option').remove();
        for (let current_sub_breed of recieved_dom_data[select_breed.val()])
        {
            select_sub_breed.append($('<option value="' + current_sub_breed + '">' + current_sub_breed + '</option>'))
        }
        select_sub_breed.show();
    }
    else
    {
        select_sub_breed.hide();
    }
}, 300)


function show_by_breed()
{
    $.ajax({
        method: "get",
        url: "https://dog.ceo/api/breed/" + select_breed.val() + "/images",
        success: function (response)
        {
            for (let link of response.message)
            {
                div_container2.append($(document.createElement('img')).attr('src', link));
            }
        }
    });
}
function show_by_sub_breed()
{
    $.ajax({
        method: "get",
        url: "https://dog.ceo/api/breed/" + select_breed.val() + "/" + select_sub_breed.val() + "/images",
        success: function (response)
        {
            for (let link of response.message)
            {
                div_container2.append($(document.createElement('img')).attr('src', link));
            }
        }
    });
}


button_get_images.click(function ()
{
    $('img').remove();
    if (select_sub_breed.val() != null)
    {
        show_by_sub_breed();
    }
    else
    {
        show_by_breed();
    }
});