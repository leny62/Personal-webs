let bt = document.getElementsByClassName("btn");
bt.onclick = validate;
function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length ==""){
      error_message.style.visibility = 'visible';
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.style.visibility = 'visible';
        // check.innerHTML = 'email must be valid';
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 140){
      text = "Please Enter More Than 140 Characters";
      error_message.innerHTML = text;
      return false;
    } else{
      db.collection("message").add("{}")
;    }
      alert("Form Submitted Successfully!");
      return true;
    }

    function sendEnquiry(){
      let name = document.getElementById('name').value;
      let email = document.getElementById('email').value;
      let message = document.getElementById('message').value;
      let form = document.getElementById('myform');
      
      db.collection('enquiries').doc().set({
        name: name,
        email: email,
        message: message
      }).then(()=>{
        form.reset();
        alert("An enquiry sent successfully")

      }).catch((error)=>{
        alert(error)
      })

    }

    function getEnquiries(){
      let form = document.getElementById('enquiry');
      db.collection('enquiries').get().then((enquiries)=>{
        enquiries.forEach(enquiry => {
          form.innerHTML+= `
          <div>
          <div class="message-sender">${enquiry.data().name}</div>
          <div class="sender-email">${enquiry.data().email}</div>
          <div class="message-content">${enquiry.data().message}</div>
          <div class="deletei"><img src="../assets/delete-icon-18-ffffff-16.png"</div>
          <div class="reply"><i class="fas fa-reply fa-4x"></i></div>
        </div>
          `
        });
      })
    }
    getEnquiries();
    
  