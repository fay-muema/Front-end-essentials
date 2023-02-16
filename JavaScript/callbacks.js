function higherorder(cb, data){
if(!cb || !( typeof cb === 'function') ){
throw new Error('Invalid call back.Please provide a function');
}

console.log(data);

setTimeout(cb, 10);
}

try {
    higherorder(1, null);
} catch (error) {
    console.log(`Got error: ${error.message}`);
    
}
higherorder(1, () => {
    console.log('Callback called!')
});