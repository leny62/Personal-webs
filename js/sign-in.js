// let loginEmail = document.getElementById('login-email');
let loginPass = document.getElementsByClassName('login-password');
// let check = document.getElementsByClassName('err');
// let signIn = document.getElementsByClassName('btn');
// let passWordv = document.getElementById('password2');
// let passWord = document.getElementById('password');    
// let name = document.getElementById('name');
// let verify = document.getElementById('verifyError');
// let email = document.getElementById('email');
// let loginEmail = document.getElementById('login-email');
let check = document.querySelector('.err');

loginEmail.onchange = (e) => {
    // console.log(loginEmail.value);
    // console.log(check);
    if (!loginEmail.value.includes('@')){
        check.style.visibility = 'visible';
        check.innerHTML = 'email must be valid';
    }
    else {
        check.style.visibility = 'hidden';
    }
} 
// signIn.addEventListener('click', onSignIn);
// function onSignIn (e) {
//     e.preventDefault();
//     const email = loginEmail.value;
//     const pass = loginPass.value;

//     if(!loginEmail || loginPass) {
//         console.log('email and password must be enterd');
//     }
//     const promise= auth.signInWithEmailAndPassword(loginEmail, loginPass);
//     promise.catch(e => console.log(e.message));
//     console.log('yes');
//     window.location.href= "../html/dashboard.html";
// }
