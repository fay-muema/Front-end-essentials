/* implementing block scope principles with
variables */

function fn1(){
    let name = "scope 1";
    console.log(name);

    let scope = 5;
console.log(scope);
{
    let scope2 = "scope 2";
    console.log(scope2);

    let scope = "different scope";
    console.log(scope);
}
{
    let scope3 = "scope 3";
    console.log(scope3);
    let scope = "a third scope";
    console.log(scope);
    
}
}
fn1();
