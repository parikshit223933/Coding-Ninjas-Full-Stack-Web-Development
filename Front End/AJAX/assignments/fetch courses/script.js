/// <reference path="typings/globals/jquery/index.d.ts" />
/* https://codingninjas.in/api/v3/courses */


var first_screen = $('.top-30');
var second_screen = $('.container-fluid')
var button = $('button');
button.click(function ()
{
    first_screen.addClass('d-none');
    second_screen.removeClass('d-none');

    $.get("https://codingninjas.in/api/v3/courses",
        function (data)
        {
            let response = data;
            let all_courses = data.data.courses;
            for (let course of all_courses)
            {
                console.log(course);
                let str='<div class="col mb-4"><div class="card"><img src="'+course.preview_image_url+'" class="card-img-top" alt=""><div class="card-body"><h5 class="card-title">'+course.name+'</h5><p class="card-text">'+course.level+'</p></div></div></div>'
                second_screen.append(str);
            }
        },
    ).fail(function()
    {
        console.log('failed');
        window.alert('please check your internet connection');
        return;
    })
});