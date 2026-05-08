// let arr=[1,2,3,4,5];
// let person = {
//    name:"sharon",
//    age: 20,
// }
// console.log(arr[0]);
// console.log(arr[arr.length-1]);
// arr.push("sharon");
// for(let i=0;i<arr.length;i++)
//    console.log(arr[i]);
// arr.pop();
// for(let i=0;i<arr.length;i++)
//    console.log(arr[i]);
// console.log(arr.length);

// function textchng(){
//    return document.getElementById('para1').innerHTML='paragraph changed';
// }
// let arr=[1,2,3,4,5];
// for(let i=0;i<arr.length;i++)
//    console.log(arr[i]);

// let person = {
//    name:"sharon",
//    age: 20,
//    course:"cs and design"
// }
// function ifempty(){
//    if (document.forms['formid']['inputid'].value==null)
//       return alert('noooooo'); 
// }
// function check(){
//    let value=document.getElementById("input").value;

//    if(value=="")
//       document.getElementById('para').innerHTML='input field is empty';
//    else
//       document.getElementById('para').innerHTML='submitted';
// }

let arr1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let arr2=[3000,4000,5000];
let name=["sharon","shamal","dhanush"]




let mul=arr1.map(function(y){
   return y= y*2;
});
console.log(mul);
let bonus=arr2.map(function(y){
   return y= y+1000;
});
console.log(bonus);
let sqr=arr1.map(function(y){
   return y= y*y*y;
});
console.log(sqr);
let upper=name.map(function(y){
   return y.toUpperCase();
});
console.log(upper);

let even=arr1.filter(function(y){
   return y= y%2==0;
});
console.log(even);

let odd=arr1.filter(function(y){
   return y= (y%2!=0);
});
console.log(odd);

let abv=arr1.filter(function(y){
   return y= (y>10);
});
console.log(abv);
let sum = (a,b)=>{
   let c=a+b;
   console.log(c);
}
console.log(sum(2,3));

let array=['sharon',20];
let [name1,age]=array;
console.log(name1);
console.log(age);

let n=['a','b','c','v','d'];
let[...l] =n;
console.log(l);
