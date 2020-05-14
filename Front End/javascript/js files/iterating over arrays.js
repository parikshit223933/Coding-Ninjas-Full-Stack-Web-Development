/* var arr=new Array(2, 3, 4, 5, 6, 7);
for(var i=0; i<arr.length; i++)
{
    console.log(arr[i]);
} */

var print=function(element)
{
    console.log(element);
}
var arr=new Array(2, 3, 4, 5, 6, 7);
arr.forEach(print);