console.log(fact(5));/* works because of hoisting */
console.log(factorial);/* this gives an error */
var factorial=function fact(n)
{
    var ans=1;
    for(var i=2; i<=n; i++)
    {
        ans*=i;
    }
    return ans;
}
function fact(n)
{
    var ans=1;
    for(var i=2; i<=n; i++)
    {
        ans*=i;
    }
    return ans;
}
