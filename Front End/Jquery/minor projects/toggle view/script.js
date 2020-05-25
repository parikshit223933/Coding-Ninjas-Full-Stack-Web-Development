///<reference path="typings/globals/jquery/index.d.ts" />

var toggler=$('#toggler');
var switcher=$('#switch');
var body=$('body');
var text=$('#text')
toggler.click(
    function()
    {
        switcher.toggleClass('right');
        if(switcher.hasClass('right'))
        {
            text.css("color", "white");
            body.css('backgroundColor', "black");
            switcher.css('backgroundColor', 'white');
            toggler.css('border', '2px solid white');
        }
        else
        {
            text.css("color", "black");
            body.css('backgroundColor', "white");
            switcher.css('backgroundColor', 'black');
            toggler.css('border', '2px solid black');
        }
    }
)