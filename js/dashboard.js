
let userName = document.getElementById('userName');
let userEmail = document.getElementById('userEmail');
auth.onAuthStateChanged((auth)=>{
    if(!auth){
         window.location.href="../html/sign-in.html"
    }
    else{
        console.log(auth);
        userName.innerHTML=auth.displayName;
        userEmail.innerHTML = auth.email;
    }
})
function logOutUser(){
    auth.signOut().then(()=>{
        window.location.href = "../html/sign-in.html";
    })
}