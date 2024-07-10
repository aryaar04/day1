a=5;
var a=9;
console.log(a);
let b=20;
console.log(b);
{
    let b=90;
    console.log(b);
}
console.log(b);
console.log(typeof(b));
var str='im a string'
console.log(typeof(str));
var bool=true;
console.log(typeof(bool));
var x;
console.log(typeof(x));
var n=null;
console.log(typeof(n));
var arr=['dsjnd','dfsd',10];
console.log(typeof(arr));
console.log(arr[0]);
console.log(arr.length); 
arr.push('dhsdf');
console.log(arr);
arr.pop()
console.log(arr)
// javascript objects
let person={
    name:'ary',
    age:19,
    loc:'tvm'}
console.log(person.age)
console.log(person)
let arr2=[{
    name:'ary',
    age:19,
    loc:'tvm'},{
        name:'ardsjfy',
        age:29,
        loc:'tvm'}]
console.log(arr2[1].age)
// function
function add(x,y) {
    console.log(x+y)
}
add(2,3)
function add2(x,y) {
    return(x+y)
}
var sum=add2(1,3)
console.log(sum)
// postifix anf prefix increment
var a =1
console.log(a++)
console.log(a)
console.log(++a)
console.log(a)
  
// if else statement
if (a>b) {
    console.log('a larger')
} else {
    console.log('a smaller')
}
// if else if else
if (a>b) {
    console.log('a larger')

}
else if(a=b){
    console.log('a equal b')
}
else {
    console.log('a smaller')
}


// triple =(will compare value as well as datatype)
var e=10
var u='10'
if(e===u)
{
    console.log('yes')
}
else{
    console.log('no')
}

// double =
var e=10
var u='10'
if(e==u)
{
    console.log('yes')
}
else{
    console.log('no')
}

// looping stmt
var array=[1,2,3,4,5]
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}

for (const key in person) {
    console.log(key)
}

for (const key in person) {
    console.log(person[key])
}

for (const i of array) {
    console.log(i)
}

// while and do while try

