/// <reference path="typings/globals/jquery/index.d.ts" />

var previous_breed = ""
var running_first_time = true;
(function all_breeds_in_dropdown()
{
    let select_tag = $('#breeds');
    let xhrReq = new XMLHttpRequest();
    xhrReq.onload = function ()
    {
        let json_response = JSON.parse(xhrReq.response);
        if (json_response.code != 404)
        {
            for (let breed in json_response.message)
            {
                let breed_option = "<option value='" + breed + "'>" + breed + "</option>";
                select_tag.append(breed_option);
            }
        }
        else
        {
            window.alert('Please check your internet connection and refresh the page!')
        }
    };
    xhrReq.open('get', 'https://dog.ceo/api/breeds/list/all');
    xhrReq.send();
})();
//options created


//get image button
$('#get-img').click(function (event)
{
    event.preventDefault();
    let current_breed = $('#breeds').val();
    if (running_first_time)
    {
        previous_breed = current_breed;
        running_first_time = false;
    }
    else
    {
        if (previous_breed == current_breed)
        {
            window.alert('please change the breed first or continue iterating in the current breed using the next button.')
            return;
        }
        else
        {
            previous_breed=current_breed;
        }
    }
    let xhrReq = new XMLHttpRequest();
    xhrReq.onload = function ()
    {
        let json_response = JSON.parse(xhrReq.response);
        let fetched_image = json_response.message;
        $('img').attr('src', fetched_image);
    };
    xhrReq.open('get', 'https://dog.ceo/api/breed/' + current_breed + '/images/random');
    xhrReq.send();
})

//next button

$('#next-button').click(function (event)
{
    event.preventDefault();
    let xhrReq = new XMLHttpRequest();
    xhrReq.onload = function ()
    {
        let json_response = JSON.parse(xhrReq.response);
        let fetched_image = json_response.message;
        $('img').attr('src', fetched_image);
    };
    xhrReq.open('get', 'https://dog.ceo/api/breed/' + previous_breed + '/images/random');
    xhrReq.send();
})