const myPromise = new Promise((resolve, reject) =>{
    console.log('Staring asynchronous work!')
    setTimeout(() => {
        resolve('Done');
    }, 1000);
});
myPromise.then(value => console.log(value));