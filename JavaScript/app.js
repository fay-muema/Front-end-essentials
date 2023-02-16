const fn1 = (a, b) => {
    b++;
    a++;
    return a + b;
}
const fn2 = (a,b) => a * b;

const fn3 = a =>{
    a = a *a;
    return a + a;
}
const fn4 = () => {
    let a = 10;
    a = a * a;
    return a + a;
};
 
const fn5 = (a) => (
   { prop1: a}
);

console.log(fn1(5,4));