/* var a = (function(){
    return typeof arguments;
 })();
 console.log(a); */

/* var add = (function ()
{
    var counter = 0;
    return function () 
    { 
        counter += 1; return counter }
})();
console.log(add());
console.log(add());
console.log(add()); */

/* arrow functions */
/* var multiply=(x, y)=>
{
    return x*y;
}
console.log(multiply(2, 3));


 */
/* var double=x=>2*x;
console.log(double(5)); */

/* "use strict";
function person(name)
{
  this.name=name;
  console.log(this);
  
  setTimeout(()=>console.log(this), 1000)
}
var obj=new person("parikshit") */

/* console.log(
    
    (function(x, f = () => x) {
    var x;
    var y = x;
    x = 2;
    return [x, y, f()];
  })(1)
  
  ); */

/*   var arguments = [1, 2, 3];
var arr = () => arguments[2];
// console.log(arr());

function foo(n, a, b) {
  var f = () => arguments[1] + n; 
  return f();
}
console.log(foo(3, 2, 1));     */

function fun(a, b, c, d, e) {
  return arguments[0];
}
console.log(fun(1, 2, 3, 4, 5));
