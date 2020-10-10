let bt = document.getElementsByClassName("btn");
bt.onclick = validate;
function validate(){git
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
    
  