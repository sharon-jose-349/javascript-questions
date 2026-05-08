// Create arrow function to multiply two numbers.

// Create arrow function to check even number.

// Create arrow function to return square of a number.

// Create object with name and age, then destructure it.

// Create array with 3 colors and destructure first two values.

// Create object with city and state, then print values using destructuring. 

let mul=(a,b)=>{
    return a*b;
}
console.log(mul(2,3));

let even=(a)=>{
   if(a%2==0)
    return "a is even";
}
console.log(even(2));


let sqr=(a)=>{
    return a*a;
}
console.log(sqr(2));
 
let person={
    name:"sharon",
    age:20
}
console.log(person.name);
let {name,age}=person
console.log(name,age);

let clr=['red','blue','green'];
let [clr1,clr2,clr3]=clr;
console.log(clr1,clr2,clr3);

let place={
    state:"kerala",
    city:"kozhikode"
}
let {state,city}=place
console.log(state,city);
