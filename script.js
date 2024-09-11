let submitBtn = document.getElementById("sbmt");
let nameError = document.getElementById("name-error");


// let phone = document.getElementById("phone");
let phoneError = document.getElementById("phone-error");

let email = document.getElementById("email");
let emailError = document.getElementById("mail-error");

let password = document.getElementById("password");
let passwordError = document.getElementById("password-error");


let message = document.getElementById("msg");
let msgError = document.getElementById("msg-error");


function validateName() {
  let fullName = document.getElementById("fullName").value;
  let nameRow = document.getElementById("name-row");
  let nameOk = document.getElementById("name-ok");
  if (fullName.length == 0) {
    nameError.innerHTML = "Name is required";
    nameRow.classList.add("redBorder");
     nameRow.classList.remove("greenBorder");
     nameOk.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
     nameOk.classList.add("red");
    return false;
  }
   if(!fullName.match(/^[A-Z][a-z]+(?:\s[A-Z][a-z]+)?\s[A-Z][a-z]+$/)){
     nameError.innerHTML = "Write Full Name";
     nameRow.classList.add("redBorder");
     nameRow.classList.remove("greenBorder");
      nameOk.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
      nameOk.classList.add("red");
return false;
  }
  nameOk.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  nameError.innerHTML="";
  nameRow.classList.remove("redBorder");
  nameRow.classList.add("greenBorder");
   nameOk.classList.remove("red");
    nameOk.classList.add("green");
  return true;
  
}
function validatePhone() {
  let phone = document.getElementById("phone").value;
  let phoneOk = document.getElementById("phone-ok");
   let phoneRow = document.getElementById("phone-row");
  if (phone.length == 0) {
    phoneError.innerHTML = "Phone Number is required";
    phoneRow.classList.add("redBorder");
    phoneOk.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
   phoneOk.classList.add("red");
    phoneRow.classList.remove("greenBorder");
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone number should be 10 Digits";
     phoneOk.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    phoneRow.classList.add("redBorder");
     phoneRow.classList.remove("greenBorder");
   phoneOk.classList.add("red");
    return false;
  }

  if (!phone.match(/^[0-9]{10}$/) && (!phone.includes(typeof Number)) ){
    phoneError.innerHTML = "Phone number contains only Numbers";
    phoneRow.classList.add("redBorder");
     phoneRow.classList.remove("greenBorder");
     phoneOk.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
      phoneOk.classList.add("red");
    return false;
  }
 
  
  phoneOk.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  phoneOk.classList.remove("red");
  phoneOk.classList.add("green");
  phoneError.innerHTML = "";
   phoneRow.classList.add("greenBorder");
  phoneRow.classList.remove("redBorder");
  return true;
}
function validateEmail() {
  let email = document.getElementById("email").value;
  let emailRow = document.getElementById("email-row");
  let emailOk = document.getElementById("email-ok");
  
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    emailRow.classList.add("redBorder");
     emailRow.classList.remove("greenBorder");
    emailOk.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    emailOk.classList.add("red");
    return false;
  }
  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
    emailError.innerHTML = "Enter Valid Email";
    emailRow.classList.add("redBorder");
     emailRow.classList.remove("greenBorder");
    emailOk.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    emailOk.classList.add("red");
    return false;
  }
  emailOk.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  emailError.innerHTML = "";
  emailRow.classList.remove("redBorder");
   emailRow.classList.add("greenBorder");
  emailOk.classList.remove("red");
  emailOk.classList.add("green");
  return true;
}
function validatePassword() {
  let password = document.getElementById("password").value;
  let passwordRow = document.getElementById("password-row");
  let passwordOk = document.getElementById("password-ok");
  if (password.length == 0) {
    passwordError.innerHTML = "Password is required";
    passwordRow.classList.add("redBorder");
    passwordRow.classList.remove("greenBorder");
    passwordOk.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    passwordOk.classList.add("red");
    return false;
  }
  if (!password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
    passwordError.innerHTML =
      "Minimum Length 8 char,At Least One Uppercase,Lowercase,one Digit,Special Char";
    passwordRow.classList.add("redBorder");
    passwordRow.classList.remove("greenBorder");
    passwordOk.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    passwordOk.classList.add("red");
    return false;
  }
  passwordOk.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  passwordError.innerHTML = "";
  passwordRow.classList.remove("redBorder");
  passwordRow.classList.add("greenBorder");
  passwordOk.classList.remove("red");
  passwordOk.classList.add("green");
  return true;
}
function validateMessage() {
  let msg = document.getElementById("msg").value;
  let msgRow = document.getElementById("msg-row");
  let msgOk = document.getElementById("msg-ok");
  let required=20;
  let left=required-msg.length;
  if (left > 0) {
    msgError.innerHTML = `${left} more characters required`;
    msgRow.classList.add("redBorder");
     msgRow.classList.remove("greenBorder");
    msgOk.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    msgOk.classList.add("red");
    return false;
  }
 
  msgOk.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  msgError.innerHTML = "";
  msgRow.classList.remove("redBorder");
  msgRow.classList.add("greenBorder");
  msgOk.classList.remove("red");
  msgOk.classList.add("green");
  return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validatePassword() || !validateMessage()){
        
            //  passwordError.innerHTML = "This Filed is Require";
            //  nameError.innerHTML = "This Filed is Required";
            //  emailError.innerHTML = "This Filed is Required";
            //  phoneError.innerHTML = "This Filed is Required";
            //  msgError.innerHTML = "This Filed is Required";

            //  setTimeout(()=>{
            //     nameError.innerHTML="";
            //     passwordError.innerHTML="";
            //     emailError.innerHTML="";
            //     phoneError.innerHTML="";
            //     msgError.innerHTML="";

            //  },4000)
            alert("Please fill required fields")
       
return false;
console.log("Florin Pop");
      
    }
    alert("Submitted Successfully")
}