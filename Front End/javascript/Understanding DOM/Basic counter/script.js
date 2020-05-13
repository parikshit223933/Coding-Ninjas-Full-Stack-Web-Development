function count_increaser()
{
    click_count++;
    var prefix="Box Clicked ";
    var suffix=" times";
    document.getElementsByClassName('output')[0].innerText=prefix+click_count+suffix;
}
var box=document.getElementsByClassName('innerbox');
var click_count=0;
box[0].addEventListener('click', count_increaser);