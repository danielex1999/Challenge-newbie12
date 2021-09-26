const email = document.querySelector('#mail');
const pass = document.querySelector('#pass');
const validacion = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const errormsg = document.querySelector('.formulation h2');
const color= document.querySelector('.formulation input');

pass.addEventListener('click',function(){
    if(validacion.test(mail.value)){
        errormsg.style.display='none';
        color.style.borderColor="hsl(0, 0%, 59%)";
    }else{
        errormsg.style.display='block';
        color.style.borderColor="hsl(354, 100%, 66%)";
    }
})

