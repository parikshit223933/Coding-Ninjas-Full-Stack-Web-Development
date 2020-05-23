/* var a = (function(){
    return typeof arguments;
 })();
 console.log(a); */


var add = (function ()
{
    var counter = 0;
    return function () 
    { 
        counter += 1; return counter }
})();
console.log(add());
console.log(add());
console.log(add());