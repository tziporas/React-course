let obj1 = {
    firstName: "Bob",
    hobbies: ["Sport"]
};

//every change in obj2 will affect obj1 
//because both point to the same object
let obj2=obj1;

//clone obj1 to obj3 (not deep copy)
let obj3={...obj1}

console.log(obj1,obj2,obj3);

obj3.firstName="Alice";
console.log(obj1,obj2,obj3);

obj3.hobbies[0]="Math";
console.log(obj1,obj2,obj3);


/*
OUTPUT:
_______________________

{ firstName: 'Bob', hobbies: [ 'Sport' ] } { firstName: 'Bob', hobbies: [ 'Sport' ] } { firstName: 'Bob', hobbies: [ 'Sport' ] }
{ firstName: 'Bob', hobbies: [ 'Sport' ] } { firstName: 'Bob', hobbies: [ 'Sport' ] } { firstName: 'Alice', hobbies: [ 'Sport' ] }
{ firstName: 'Bob', hobbies: [ 'Math' ] } { firstName: 'Bob', hobbies: [ 'Math' ] } { firstName: 'Alice', hobbies: [ 'Math' ] }
*/