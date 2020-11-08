// const signUpForm=document.getElementsByClassName("Form");
// signUpForm.addEventlistener('submit'), (e)=>{
//     e.preventDefault();
//     const email= document.getElementById(email).value;
//     const password= document.getElementById(password).value;
//     const promise= auth.createUserWithEmailAndPassword(email, password)
//     .then(resultData =>console.log(resultData))
//     .catch(error =>console.log(error));
// }
let passWordv = document.getElementById('password2');
let passWord = document.getElementById('password');
let name = document.getElementById('name');
let verify = document.getElementsByClassName('messge');
let email = document.getElementById('email');

email.onchange = (e) => {
    console.log(email);
    if (!email.includes('@')){
        verify.style.visibility = 'visible';
        verify.innerHTML = 'email must be valid';
    }
    else {
        verify.style.visibility = 'hidden';
    }
}
passWordv.oninput = function () {
    if (passWord !== passWordv) {
        verify.style.visibility = 'visible';
        verify.innerHTML = 'passwords do not match';
    } else {
        verify.style.visibility = 'hidden';
    }
}