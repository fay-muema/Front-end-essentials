function *gen(){
let i =1;
while(true){
    yield i;
    i = i*2;
}

}

const generator = gen();
console.log(generator.next(), generator.next(), generator.next(), generator.next());

/* generating generators 
-fibonacci sequence which is the result of adding two numbers before the number
*/

function *fibonacci(){
    let a = 0;
    let b = 1;

    while(true){
        let current = a;
        a = b;
        b = current + a;
        yield current;
    }

}

const fibo = fibonacci();
for(let i = 0; i < 20; i++){
    console.log(fibo.next());
}