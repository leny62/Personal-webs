auth.onAuthStateChange(async(user)) =>{
    if(!user) {
        window.location.href= '/';
    }
}
const logout=document.getElementsByClassName("logout");
auth.signOut().then(()=>{
    location.href="../html/sign-in.html"
})
