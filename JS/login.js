let eyeIconLogin = document.getElementById("eyeIconLogin");
let loginPassword = document.getElementById("loginPassword");
let loginEmail = document.getElementById("loginEmail");
let loginBtn = document.getElementById("loginBtn");
let rmbrBtn = document.getElementById("rmbr");
let loader = document.getElementById("loader");
let loginContainer = document.getElementById("loginContainer");

function passwordHideShow() {
  function showIcon() {
    loginPassword.addEventListener("input", () => {
      if (loginPassword.value.length === 0) {
        eyeIconLogin.style.display = "none";
      } else {
        eyeIconLogin.style.display = "block";
      }
    });
  }
  showIcon();

  eyeIconLogin.addEventListener("click", () => {
    if (loginPassword.type === "password") {
      loginPassword.setAttribute("type", "text");
      eyeIconLogin.innerHTML =
        '<i class="fa-solid fa-eye-slash fontIcons"></i>';
      eyeIconLogin.setAttribute("title", "Hide");
    } else {
      loginPassword.setAttribute("type", "password");
      eyeIconLogin.innerHTML = '<i class="fa-solid fa-eye fontIcons"></i>';
      eyeIconLogin.setAttribute("title", "Show");
    }
  });
}

passwordHideShow();

function loginValidation() {
  loginBtn.addEventListener("click", () => {
    let getUserDataFromLS = localStorage.getItem("userCredentials");
     if (!getUserDataFromLS) {
       alert("No user credentials found. Please sign up first.");
       
     }
    let convertStrToObj = JSON.parse(getUserDataFromLS);
    console.log(convertStrToObj);

    let userEmail = convertStrToObj.user_email;
    let userPassword = convertStrToObj.user_password;

    console.log(userEmail);
    console.log(userPassword);

   

    if (
      loginEmail.value === userEmail &&
      loginPassword.value === userPassword
    ) {
      console.log("Succesfully Logged");
      loader.style.display = "block";
      loginContainer.classList.add("bgmBlurr");
      setTimeout(() => {
        loader.style.display = "none";
        window.location.href = "./home.html";
      }, 2500);
    } else if (loginEmail.value === "" || loginPassword.value === "") {
      alert("Please fill out both email and password fields.");
    } else {
      alert("Invalid  User Credentials");
    }
  });
}

loginValidation();
