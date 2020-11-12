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
function signUpUser() {

	let signupName = document.getElementById('name').value;
	let signUpEmail = document.getElementById('email').value;
	let signUpPass = document.getElementById('password').value;
	let signUpPassVer = document.getElementById('password2').value;
	if (!signupName) {
		let p = document.createElement('p');
		p.style.color = "red";
		p.innerHTML = "Please input Name";
		document.getElementById("error").appendChild(p);
		setTimeout(() => {
			p.innerHTML = '';
		}, 9000);
	}
	else if (!signUpEmail) {
		let p = document.createElement('p');
		p.style.color = "red";
		p.innerHTML = "Please input Email";
		document.getElementById("error").appendChild(p);
		setTimeout(() => {
			p.innerHTML = '';
		}, 9000);
	}
	else if (!signUpPass) {
		let p = document.createElement('p');
		p.style.color = "red";
		p.innerHTML = "Please input Password";
		document.getElementById("error").appendChild(p);
		setTimeout(() => {
			p.innerHTML = '';
		}, 9000);
	}
	else if (!signUpPassVer) {
		let p = document.createElement('p');
		p.style.color = "red";
		p.innerHTML = "Please confirm password";
		document.getElementById("error").appendChild(p);
		setTimeout(() => {
			p.innerHTML = '';
		}, 9000);
	}
	else if (signUpPassVer !== signUpPass) {
		let p = document.createElement('p');
		p.style.color = "red";
		p.innerHTML = "Passwords do not match";
		document.getElementById("error").appendChild(p);
		setTimeout(() => {
			p.innerHTML = '';
		}, 9000);

	}
	else {
		firebase.auth().createUserWithEmailAndPassword(signUpEmail, signUpPass).then((user) => {
			let currentUser = auth.currentUser;
			if (currentUser) {
				currentUser.updateProfile({
					displayName: signupName
				}).then(() => {
					window.alert(`welcome ${signupName}`);
					window.location.href = "../html/dashboard.html";

				}).catch((error) => {
					alert(error);
				});
			}
		}).catch((error) => {
			alert(error);
		});
	}



}
document.getElementById('button').addEventListener('click', () => {
	signUpUser();
});



function loginUser() {
	let email = document.getElementById('login-email').value;
	let password = document.getElementById('login-password').value;

	auth.signInWithEmailAndPassword(email, password).then((user) => {

		localStorage.setItem('userName', user.user.displayName);
		localStorage.setItem('userEmail', user.user.email);

		window.location.href = "../html/dashboard.html";
	}).catch((error) => {
		alert(error);
	});
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

