let getA = a => a;
console.log(getA(7));

let square = a => a*a;
console.log(square(5));

let square2 = (a) => {return a*a};
console.log(square2(3));

let x=6;
let square3 = () => x*x;
console.log(square3());

let square4 = (a,b) => a*b;
console.log(square4(5,4));

let fun = function(){
  this.val=1;
  setTimeout(() => {   //inner function which is arrow function doesn't can take value of this from it's parrent. 
    this.val++;
    console.log(this.val)
  }, 1);
};

let obj = new fun();

// let fun1 = function(){
//   console.log(arguments[2])
// }

// fun1(5,6,7);

let obj = new fun();  //how to use arguments in arrow function 

let fun1 = (...n) => {  //use spread operator here.
  console.log(n[2])
}

fun1(5,6,7);