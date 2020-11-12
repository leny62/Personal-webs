let passWordv = document.getElementById('password2');
let passWord = document.getElementById('password');    
let name = document.getElementById('name');
let verify = document.getElementById('verifyError');
let email = document.getElementById('email');
let loginEmail = document.getElementById('login-email');
let auth = firebase.auth();
// let check = document.getElementsByClassName('err');


function signUpUser(){

    let signupName = document.getElementById('name').value;
    let signUpEmail = document.getElementById('email').value;
    let signUpPass = document.getElementById('password').value;
    let signUpPassVer = document.getElementById('password2').value;
    alert("Name: "+signupName+" email: "+signUpEmail+" password "+signUpPass);
    
    firebase.auth().createUserWithEmailAndPassword(signUpEmail,signUpPass).then((user)=>{
          let currentUser = auth.currentUser;
          if(currentUser){
            currentUser.updateProfile({
                  displayName: signupName
              }).then(()=>{
                window.location.href = "../html/dashboard.html";
                  
              }).catch((error)=>{
                  alert(error)
              })
          }
    }).catch((error)=>{
       alert(error)
    })
}

function loginUser(){
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password).then((user)=>{
        
        localStorage.setItem('userName',user.user.displayName);
        localStorage.setItem('userEmail',user.user.email);

        window.location.href = "../html/dashboard.html";
    }).catch((error)=>{
        alert(error)
    })
}

