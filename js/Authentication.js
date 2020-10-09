let passWordv = document.getElementById('password2');
let passWord = document.getElementById('password');    
let name = document.getElementById('name');
let verify = document.getElementById('verifyError');
let email = document.getElementById('email').value;
let loginEmail = document.getElementById('login-email');
let auth = firebase.auth();
// let check = document.getElementsByClassName('err');


function signUpUser(){
    
    firebase.auth().createUserWithEmailAndPassword(email,password).then((user)=>{
          window.location.href = "../html/dashboard.html";
    }).catch((error)=>{
       alert(error)
    })
}

function loginUser(){
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password).then((user)=>{
        window.location.href = "../html/dashboard.html";
    }).catch((error)=>{
        alert(error)
    })
}
// email.onChange = (e) => {
//     console.log(email.value);
//     if (!email.value.includes('@')){
//         verify.style.visibility = 'visible';
//         verify.innerHTML = 'email must be valid';
//     }
//     else {
//         verify.style.visibility = 'hidden';
//     }
// }
// loginEmail.onChange = (e) => {
//     console.log(login-email.value);
//     if (!login-email.value.includes('@')){
//         verify.style.visibility = 'visible';
//         verify.innerHTML = 'email must be valid';
//     }
//     else {
//         verify.style.visibility = 'hidden';
//     }
// }
// passWordv.oninput = function () {
//     if (passWord.value !== passWordv.value) {
//         verify.style.visibility = 'visible';
//         verify.innerHTML = 'passwords do not match';
//     } else {
//         verify.style.visibility = 'hidden';
//     }
// }
// loginEmail.onchange = (e) => {
//     console.log(loginEmail.value);
//     if (!loginEmail.value.includes('@')){
//         check.style.visibility = 'visible';
//         check.innerHTML = 'email must be valid';
//     }
//     else {
//         check.style.visibility = 'hidden';
//     }
// }    
