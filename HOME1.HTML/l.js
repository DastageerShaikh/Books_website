const wrappar = document.querySelector('.wrapper');
const loginlink = document.querySelector('.Login-link');
const relogolink = document.querySelector('relogo');
 
relogolink.addEventListener('click', ()=>{
    wrappar.classList.add('active');
}); 

loginlink.addEventListener('click' , ()=> {
    wrappar.classList.remove('action');
});