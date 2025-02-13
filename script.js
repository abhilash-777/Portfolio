const text = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const message = document.getElementById('message');
const form = document.getElementById('form');

const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const password_error = document.getElementById('password_error');
const message_error = document.getElementById('message_error');

function buttonSelection(sectionId){
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth'});
}

form.addEventListener('submit',(e)=>{

    var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+([A-za-z]{2,4})$/;

    if(text.value ==='' ||text.value == null){
        e.preventDefault();
        name_error.innerHTML = "Name is required";
    }else{
        name_error.innerHTML = "";
    }

    if(!email.value.match(email_check)){
        e.preventDefault();
        email_error.innerHTML = "Enter valid Email address(example123@mail.com)";
    }else{
        email_error.innerHTML = "";
    }

    if(password.value.length<6){
        e.preventDefault();
        password_error.innerHTML = "password must be more than 6 characters";
    }else{
        password_error.innerHTML = "";
    }

    if(message.value ==='' ||message.value == null){
        e.preventDefault();
        message_error.innerHTML = "please add your message";
    }else{
        message_error.innerHTML = "";
    }
})
