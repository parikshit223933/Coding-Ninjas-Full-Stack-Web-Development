/// <reference path="typings/globals/jquery/index.d.ts" />

//zrVafsMHD8r1SC8mHyg91mnNguuzdIoPRXGD1BvS

var input_box=$('#div-date input');
var button=$('#div-button button');
var container2=$('#container2');

button.click(function()
{
    $.ajax({
        method: "GET",
        url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos",
        data: 
        {
            earth_date:parseInt(input_box.val().split('/')[2]).toString()+"-"+parseInt(input_box.val().split('/')[1]).toString()+"-"+parseInt(input_box.val().split('/')[0]).toString(),
            api_key:"zrVafsMHD8r1SC8mHyg91mnNguuzdIoPRXGD1BvS"
        },
        success: function (response) {
            $('img').remove();
            if(response.photos.length==0)
            {
                window.alert('No photos on this date!');
                return;
            }
            for(let photo of response.photos)
            {
                let image_link=photo.img_src;
                console.log(image_link);
                $(document.createElement('img')).attr('src', image_link).appendTo($('#container2'));
            }
        }
    });
}).fail=function()
{
    window.alert("Please select a valid date!");
};