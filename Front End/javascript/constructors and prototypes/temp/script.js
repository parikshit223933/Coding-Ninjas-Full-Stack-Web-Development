/* var student1=
{
    name:"abc",
    rollNo:10,
    marks:80,
}
console.log(student1); */

/* function createStudent(name, age, marks)
{
    this.name=name;
    this.age=age;
    this.marks=marks;
}
var student1=new createStudent("parikshit", 20, 30);
var student2=new createStudent("singh", 25, 33);
console.log(student1, student2); */

/* function Vehicle(number_of_wheels, color)
{
    this.number_of_wheels=number_of_wheels;
    this.color=color;
    this.get_color=function()
    {
        return this.color;
    }
    this.get_number_of_wheels=function()
    {
        return this.number_of_wheels;
    }
}
vehicle1=new Vehicle(20, "blue");
vehicle2=new Vehicle(30, "pink");
console.log(vehicle1.get_number_of_wheels(), vehicle2.get_color());
 */



/* function Vehicle(number_of_wheels, color)
{
    this.number_of_wheels=number_of_wheels;
    this.color=color;
}
Vehicle.prototype.get_color=function()
{
    return this.color;
}
Vehicle.prototype.get_number_of_wheels=function()
{
    return this.number_of_wheels;
}
vehicle1=new Vehicle(20, "blue");
vehicle2=new Vehicle(30, "pink");
console.log(vehicle1.get_number_of_wheels(), vehicle2.get_color()); */



/* class Vehicles
{
    constructor(number_of_wheels, color)
    {
        this.color=color;
        this.number_of_wheels=number_of_wheels;
    }//if i dont add constructor, a default empty constructor will be added by itself
    get_color()
    {
        return this.color;
    }
}
var vehicle1=new Vehicles(10, "green");
var vehicle2=new Vehicles(20, "pink");
console.log(Object.getPrototypeOf(vehicle1)==Vehicles.prototype);
console.log(vehicle2);
 */



/* function Vehicle(color, tyres)
{
   this.tyres=tyres;
   this.color=color;
}
Vehicle.prototype=
{
   get_tyre:function()
   {
       return this.tyres;
   },
   get_color:function()
   {
        return this.color;
   }
}
var v1=new Vehicle("pink", 21);
var v2=new Vehicle("blue", 45);
console.log(Object.getPrototypeOf(v1)==Object.getPrototypeOf(v2));
console.log(Object.prototype.isPrototypeOf(v1)); */




class Vehicle
{
    constructor(number_of_wheels, color)
    {
        this.color=color;
        this.number_of_wheels=number_of_wheels;
    }
    get_color()
    {
        return this.color;
    }
    print_description()
    {
        console.log("vehicle", this.number_of_wheels, this.color);
    }
}

class Car extends Vehicle/* inheritance */
{
    constructor(number_of_wheels, color, number_of_doors)
    {
        super(number_of_wheels, color);
        this.number_of_doors=number_of_doors;
    }
    print_description()
    {
        super.print_description();
        console.log("car", this.number_of_doors);
    }
}
var c=new Car(4, "red", 4);
c.print_description();
/* var vehicle1=new Vehicle(10, "green");
var vehicle2=new Vehicle(20, "pink"); */