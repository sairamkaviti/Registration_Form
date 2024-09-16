let nameHead = document.getElementById("nameHead");
let profilePicImage = document.getElementById("profilePicImage");
let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userPassword = document.getElementById("userPassword");
let userGender = document.getElementById("userGender");
let userMS = document.getElementById("userMS");
let userMobile = document.getElementById("userMobile");
let userKnownLan = document.getElementById("userKnownLan");
let userState = document.getElementById("userState");
let userCity = document.getElementById("userCity");
let userPincode = document.getElementById("userPincode");
let deleteAccount = document.getElementById("deleteAccount");

window.onload = () => {
 
  let getUserDataFromLS = localStorage.getItem("userCredentials");
  let convertStrToObj = JSON.parse(getUserDataFromLS);
  let user_Gender = convertStrToObj.user_gender;
  let userMaritalStatus = convertStrToObj.user_maritalStatus;  
  let salutation;
  if (user_Gender == "Male") {
    salutation = "Mr.";
  } else if (userMaritalStatus == "Single") {
    salutation = "Miss.";
  } else {
    salutation = "Mrs.";
  }
  nameHead.innerHTML = `Welcome  ${salutation} ${convertStrToObj.user_name}`;
  userName.innerHTML = convertStrToObj.user_name;
  userEmail.innerHTML = convertStrToObj.user_email;

  userPassword.innerHTML = convertStrToObj.user_password;

  userGender.innerHTML = convertStrToObj.user_gender;
  userMS.innerHTML = convertStrToObj.user_maritalStatus;
  userMobile.innerHTML = convertStrToObj.user_mobile;
  userKnownLan.innerHTML = convertStrToObj.user_knownLanguages;

  userState.innerHTML = convertStrToObj.user_state;
  userCity.innerHTML = convertStrToObj.user_city;
  userPincode.innerHTML = convertStrToObj.user_pincode;
 
};
deleteAccount.addEventListener("click", () => {
  localStorage.removeItem("userCredentials");
  alert("Successfully deleted your account...")
  window.location.href="./index.html"
})