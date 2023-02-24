const button1 = document.getElementById('button1');

button1.addEventListener('click', ()=> {
    alert('clicked');
}, false);


const div1 = document.getElementById('div1');

div1.addEventListener('click', (e)=> {
    e.target.style.backgroundColor = 'red'
})

const eventnew = new MouseEvent('click',{
    bubbles: true,
    cancelable: true

})
const element = document.getElementById('button1');
const cancel = element.dispatchEvent(eventnew);