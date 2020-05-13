var obj={
    name:"parikshit",
    rollNo:146,
    age:21
};
/* for (var i in obj)
{
    console.log(i, obj[i]);
} *///this is one way to travel through the object

var keys=Object.keys(obj);
console.log(keys);
var values=Object.values(obj);
console.log(values);
var k=Object.getOwnPropertyNames(obj);
console.log(k);
//in this way too, we can iterate on the keys.