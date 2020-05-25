/// <reference path="typings/globals/jquery/index.d.ts" />



$('#fetch-image-button').click(
    function (event)
    {
        /* event.preventDefault();
        var xhrRequest=new XMLHttpRequest();
        xhrRequest.onload=function()
        {
            let resp=JSON.parse(xhrRequest.response);
            //if i want to convert json object to a string then stringify is the method i need to use and 
            //if i want the json fron a string then JSON.parse is the method i need to use.
            let image_url=resp.message;
            $('#dog-image').attr('src', image_url);
        }
        xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random');
        xhrRequest.send(); */



        /* $.ajax({
            type: "get",
            url: "https://dog.ceo/api/breeds/image/random",
            success: function (response)
            {
                // let resp=JSON.parse(xhrRequest.response);
                let image_url=response.message;
                $('#dog-image').attr('src', image_url);
            }
        }); */



        $.get("https://dog.ceo/api/breeds/image/radom",
            function (data)
            {
                let image_url=data.message;
                $('#dog-image').attr('src', image_url);
            },
        ).fail(
            function(xhr, text_status, error_thrown)
            {
                console.log('failed');
            }
        );
    }


);