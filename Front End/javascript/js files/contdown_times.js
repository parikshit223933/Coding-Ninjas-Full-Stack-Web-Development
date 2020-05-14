var total_time=10;
function decrementor()
{
    console.log(total_time--);
    if(total_time<0)
        clearInterval(instance_id);
}
var instance_id=setInterval(decrementor, 1000);