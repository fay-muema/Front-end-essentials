const { set } = require("express/lib/response");

console.log('step 1');

function f1(){
    console.log('f1');
}
function f2(){
    console.log('f2');
}
function f3(){
    console.log('f3');
    setTimeout(f5, 90)
}
function f4(){
    console.log('f4');
}
function f5(){
    console.log('f5');
}

setTimeout(f1, 105);
setTimeout(f2, 15);
setTimeout(f3, 10);
setTimeout(f4, 100);