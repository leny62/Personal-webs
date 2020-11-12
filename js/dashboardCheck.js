let userName = document.getElementById('userName');
let disp = document.getElementById('userName1');
let userEmail = document.getElementById('userEmail');
auth.onAuthStateChanged((auth)=>{
    if(!auth){
         window.location.href="../html/sign-in.html"
    }
    else{
        console.log(auth);
        userName.innerHTML=auth.displayName;
        userEmail.innerHTML = auth.email;
        disp.innerHTML = auth.displayName;
    }
})
function logOutUser(){
    auth.signOut().then(()=>{
        window.location.href = "../html/sign-in.html";
    })
}