// const { set } = require("express/lib/application");
setTimeout(() => {
    for(let i = 0; i < 2000000; i++){}
    console.log('done delaying');
}, 0);

setTimeout(() =>{
    console.log('done!')
}, 0);

/* zero delay timeout */

setTimeout(() => {
    console.log('done');
}, 0);

setTimeout(() => {
    console.log('step 2');
}, 0);

console.log('step 3');