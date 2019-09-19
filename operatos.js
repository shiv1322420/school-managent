var a,b,rest;
var var1 = 3;
var var2 = 4;
var a1=true;
var a2=false;
arithopr();
relationalopr(var1,var2);
bitwise(var1,var2);
logical(a1,a2);
condtional(var1,var2);
des(a,b,rest);
function arithopr(){            //function with out perametes
  //use of arithmeteic operator;
  console.log("arithmetic operators ..");
const x=5;
const y=2;
var z=3;
var res= x+y;
console.log(res);
var res= x-y;
console.log(res);
var res= x*y;
console.log(res);
var res= x/y;
console.log(res);
var res= x%y;
console.log(res);
console.log(z**=3); //use of assignment and exponentation operator
}
function relationalopr(var1,var2)
{
//use of logical operators
console.log("realtional operators ..");
console.log(var1==var2);
console.log(var1!=var2);
console.log(var1===var2);
console.log(var1!==var2);
console.log(var1>var2);
console.log(var1>=var2);
console.log(var1<var2);
console.log(var1<=var2);

}
function bitwise(var1,var2)
{
  console.log("bitwise operators ..");
  console.log(var1&var2);
  console.log(var1|var2);
  console.log(var1^var2);
  console.log(~var1);
  console.log(var1<<2);
  console.log(var2>>2);
  console.log(9>>>2);
}
function logical(a1,a2)
{
  console.log("logical operators ..");
console.log(a1&&a2);
console.log(a1||a2);
console.log(a1!=a2);
}
function condtional(var1,var2)
{
  let res= (var1>var2)?"var1 is greater":"var2 is greater";
  console.log(res);
}
function des(a,b,rest)
{
  console.log("destructive assignments ..");
[a, b, ...rest] = [10, 20, 30, 40, 50]; //use of destructive assigment
console.log(a,b,rest);
}