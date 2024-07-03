const wrapper = document.querySelector('.wrapper');
const LoginLink = document.querySelector('.login-link');
const RegisterLink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');

// const barsIcon = document.getElementById('bars-icon');
// const menu = document.getElementById('menu');

RegisterLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

LoginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnpopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

// barsIcon.addEventListener('click', ()=>{
//     if(menu.className === 'hidden'){
//         menu.classList.remove('hidden');
//     }else{
//         menu.classList.add('hidden');
//     }
// })