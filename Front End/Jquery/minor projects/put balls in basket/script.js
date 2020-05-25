/// <reference path="typings/globals/jquery/index.d.ts" />

var colors = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black',
    'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen',
    'deepskyblue', 'firebrick', 'crimson'];


function add_ball()
{
    let random_color=colors[Math.floor(Math.random()*colors.length)];
    let container=$('#container');
    let ball=$('<div class="ball"></div>');
    ball.css('backgroundColor', random_color);
    container.append(ball);
}
$('button').click(
    function(event)
    {
        event.preventDefault();
        add_ball();
    }
)