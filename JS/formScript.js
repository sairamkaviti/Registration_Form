let selectBtn = document.getElementById("select");
let fileInput = document.getElementById("file-input");
let remove = document.getElementById("remove");
let imgTag = document.getElementById("imgTag");

let radios = document.querySelectorAll('input[type="radio"]');
let checkboxes = document.querySelectorAll('input[type="checkbox"]');

let eyeIcon = document.getElementById("eyeIcon");
let password = document.getElementById("password");

let citySelect = document.getElementById("citySelect");
let citySelectRow = document.getElementById("citySelectRow");

let stateSelectRow = document.getElementById("stateSelectRow");
let stateSelect = document.getElementById("stateSelect");

let pinCode = document.getElementById("pinCode");
let pinCodeRow = document.getElementById("pinCodeRow");

let male = document.getElementById("male");
let female = document.getElementById("female");
let single = document.getElementById("single");
let married = document.getElementById("married");
let telugu = document.getElementById("telugu");
let hindi = document.getElementById("hindi");
let english = document.getElementById("english");
let tamil = document.getElementById("tamil");
let gender = "";
let maritalStatus = "";
let knownLanguages = [];

let submitBtn = document.getElementById("sbmtBtn");
let getDataBtn = document.getElementById("getDataBtn");
let resetBtn = document.getElementById("reset");
let editDataBtn = document.getElementById("editDataBtn");
let saveDataBtn = document.getElementById("saveDataBtn");

let fullName = document.getElementById("fullName");
let nameError = document.getElementById("nameError");
let nameRow = document.getElementById("nameRow");

let email = document.getElementById("email");
let emailError = document.getElementById("emailError");
let emailRow = document.getElementById("emailRow");

let passwordError = document.getElementById("passwordError");
let passwordRow = document.getElementById("passwordRow");

let mobileNumber = document.getElementById("mobileNumber");
let mobileError = document.getElementById("mobileError");
let mobileRow = document.getElementById("mobileRow");

let signUpContainer = document.getElementById("signUpContainer");
let loader = document.getElementById("loader");

//---------Profile Picture Selection Opened-----------//
function profilePicSelection() {
  selectBtn.addEventListener("click", () => {
    fileInput.click();
  });
  if (fileInput.files.length === 0) {
    selectBtn.setAttribute("title", "No File Choosen");
  }
  fileInput.addEventListener("change", function (e) {
    imgTag.src = URL.createObjectURL(e.target.files[0]);
    console.log(e.target.files[0]);

    if (fileInput.files.length > 0) {
      selectBtn.innerHTML = "Change Image";
      remove.style.display = "block";
      let imgName = fileInput.files[0].name;
      selectBtn.setAttribute("title", imgName);
    }
  });
  remove.addEventListener("click", () => {
    remove.style.display = "none";
    selectBtn.innerHTML = "Select Image";
    imgTag.src = "./images/noImage.png";
    selectBtn.setAttribute("title", "No File Choosen");
  });
}
profilePicSelection();

//---------Profile Picture Selection Closed-----------//

//---------Password Hide Show  Opened-----------//

function passwordHideShow() {
  function showIcon() {
    password.addEventListener("input", () => {
      if (password.value.length === 0) {
        eyeIcon.style.display = "none";
      } else {
        eyeIcon.style.display = "block";
      }
    });
  }
  showIcon();

  eyeIcon.addEventListener("click", () => {
    if (password.type === "password") {
      password.setAttribute("type", "text");
      eyeIcon.innerHTML = '<i class="fa-solid fa-eye-slash fontIcons"></i>';
      eyeIcon.setAttribute("title", "Hide");
    } else {
      password.setAttribute("type", "password");
      eyeIcon.innerHTML = '<i class="fa-solid fa-eye fontIcons"></i>';
      eyeIcon.setAttribute("title", "Show");
    }
  });
}

passwordHideShow();

//---------Password Hide Show  Closed-----------//

//--------State and City Selection Opened--------------//

function stateSelectedFn() {
  stateSelect.addEventListener("change", () => {
    switch (stateSelect.value) {
      case "Andhra Pradesh":
        citySelect.value = "Vijayawada";
        pinCode.value = 534673;
        break;

      case "Telangana":
        citySelect.value = "Hyderabad";
        pinCode.value = 534600;

        break;
      case "Karnataka":
        citySelect.value = "Banglore";
        pinCode.value = 500676;

        break;
      case "Tamil Nadu":
        citySelect.value = "Chennai";
        pinCode.value = 530010;

        break;
      case "Madya Pradesh":
        citySelect.value = "Mumbai";
        pinCode.value = 539876;

        break;

      default:
        citySelect.value = "Select City";
        pinCode.value = "PinCode";

        break;
    }
    if (stateSelect.value.length > 0) {
      stateSelectRow.style.border = "1px solid lightseagreen";
      citySelectRow.style.border = "1px solid lightseagreen";
      pinCodeRow.style.border = "1px solid lightseagreen";
    }
  });
}
stateSelectedFn();

function citySelectedFn() {
  citySelect.addEventListener("change", () => {
    switch (citySelect.value) {
      case "Vijayawada":
        stateSelect.value = "Andhra Pradesh";
        pinCode.value = 534673;

        break;

      case "Hyderabad":
        stateSelect.value = "Telangana";
        pinCode.value = 534600;

        break;
      case "Banglore":
        stateSelect.value = "Karnataka";
        pinCode.value = 500676;

        break;
      case "Chennai":
        stateSelect.value = "Tamil Nadu";
        pinCode.value = 530010;

        break;
      case "Mumbai":
        stateSelect.value = "Madhya Pradesh";
        pinCode.value = 539876;

        break;

      default:
        stateSelect.value = "Select State";
        pinCode.value = "PinCode";

        break;
    }
    if (citySelect.value.length > 0) {
      citySelectRow.style.border = "1px solid lightseagreen";
      stateSelectRow.style.border = "1px solid lightseagreen";
      pinCodeRow.style.border = "1px solid lightseagreen";
    }
  });
}
citySelectedFn();

//--------State and City Selection Closed--------------//

//------Gender and Marital Status and languages Known Selection Opened------//

function genderSelectionFn() {
  male.addEventListener("change", (event) => {
    console.log(event);
    if (male.checked) {
      gender = "Male";
      console.log("Male Clicked");
      console.log("selected Gender :" + gender);
    }
  });
  female.addEventListener("change", (event) => {
    //  console.log(event);
    if (female.checked) {
      gender = "Female";
      console.log("Female Clicked");
      console.log("selected Gender :" + gender);
    }
  });
  single.addEventListener("change", (event) => {
    //  console.log(event);
    if (single.checked) {
      maritalStatus = "Single";
      console.log("Single Clicked");
      console.log("selected Marital Status :" + maritalStatus);
    }
  });
  married.addEventListener("change", (event) => {
    //  console.log(event);
    if (married.checked) {
      maritalStatus = "Married";
      console.log("Married Clicked");
      console.log("selected Marital Status :" + maritalStatus);
    }
  });
  telugu.addEventListener("change", (event) => {
    if (telugu.checked) {
      knownLanguages.push("Telugu");
      console.log("Telugu Selected");
    }
  });
  hindi.addEventListener("change", (event) => {
    if (hindi.checked) {
      knownLanguages.push("Hindi");
      console.log("Hindi Selected");
    }
  });
  english.addEventListener("change", (event) => {
    if (english.checked) {
      knownLanguages.push("English");
      console.log("English Selected");
    }
  });
  tamil.addEventListener("change", (event) => {
    if (tamil.checked) {
      knownLanguages.push("Tamil");
      console.log("Tamil Selected");
    }
  });
}
genderSelectionFn();

//------Gender and Marital Status and languages Known Selection Selection Closed------//

//-----Full Name Validations opened-------//

function fullNamevalidityFn() {
  if (!fullName.checkValidity()) {
    nameError.innerHTML = "* Please Enter a Valid Name *";
    nameRow.style.border = "1px solid red";
    return false;
  } else {
    nameError.innerHTML = "";
    nameRow.style.border = "1px solid lightseagreen";
    return true;
  }
}

//-----Full Name Validations Closed-------//

//-----Email Validations opened-------//

function emailValidityFn() {
  if (
    !email.checkValidity() ||
    !email.value.match(/^[a-zA-Z0-9._%+-]+@gmail.com$/)
  ) {
    emailError.innerHTML = "* Please Enter a Valid Email *";
    emailRow.style.border = "1px solid red";
    return false;
  } else {
    emailError.innerHTML = "";
    emailRow.style.border = "1px solid lightseagreen";
    return true;
  }
}

//-----Email Validations closed-------//

//-----Password Validations opened-------//

function passwordValidityFn() {
  if (!password.checkValidity()) {
    passwordError.innerHTML =
      "* Password Should contains atleast one capital,small,special char,number and minimum length of 8 characters *";
    passwordRow.style.border = "1px solid red";
    return false;
  }
  passwordError.innerHTML = "";
  passwordRow.style.border = "1px solid lightseagreen";
  return true;
}

//-----Password Validations closed-------//

//------Mobile Number Validations Opened---------//

function mobileNumberValidityFn() {
  if (!mobileNumber.checkValidity()) {
    mobileError.innerHTML =
      "* Phone number contains only Numbers and length should be 10 digits *";
    mobileRow.style.border = "1px solid red";
    return false;
  } else {
    mobileError.innerHTML = "";
    mobileRow.style.border = "1px solid lightseagreen";
    return true;
  }
}

//------Mobile Number Validations Closed---------//

//----Reset All Input Fields opened---------------------//
function resetAllInputFieldsFn() {
  fullName.value = "";
  nameRow.style.border = "";

  email.value = "";
  emailRow.style.border = "";

  password.value = "";
  passwordRow.style.border = "";

  mobileNumber.value = "";
  mobileRow.style.border = "";

  stateSelect.value = "";
  stateSelectRow.style.border = "";

  citySelect.value = "";
  citySelectRow.style.border = "";

  pinCode.value = "";
  pinCodeRow.style.border = "";

  remove.style.display = "none";
  selectBtn.innerHTML = "Select Image";
  imgTag.src = "./images/noImage.png";
  selectBtn.setAttribute("title", "No File Choosen");

  radios.forEach((event) => {
    event.checked = false;
  });

  checkboxes.forEach((event) => {
    event.checked = false;
  });
}
//----Reset All Input Fields Closed---------------------//

//---------Set Details in Local Storage Opened------------//

function setDetailsToLocalStorageFn() {
  let languagesKnownByUser = knownLanguages.join(",");
  let userDetailsJsonObject = {
    user_name: fullName.value,
    user_email: email.value,
    user_password: password.value,
    user_mobile: mobileNumber.value,
    user_gender: gender,
    user_maritalStatus: maritalStatus,
    user_knownLanguages: languagesKnownByUser,
    user_state: stateSelect.value,
    user_city: citySelect.value,
    user_pincode: pinCode.value,
    user_profilePic: imgTag.src,
  };
  let convertObjToStr = JSON.stringify(userDetailsJsonObject);

  localStorage.setItem("userCredentials", convertObjToStr);
}
//---------Set Details in Local Storage Closed------------//

//------Form All Filed submission and Validations Opened---------//

function submitDetailsFn() {
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let genderLength = gender.length;
    let maritalStatusLength = maritalStatus.length;
    let stateSelectLength = stateSelect.value.length;
    let citySelectLength = citySelect.value.length;

    if (
      !fullNamevalidityFn() ||
      !emailValidityFn() ||
      !passwordValidityFn() ||
      !mobileNumberValidityFn() ||
      genderLength == 0 ||
      maritalStatusLength == 0 ||
      stateSelectLength == 0 ||
      citySelectLength == 0 ||
      fileInput.files.length === 0
    ) {
      alert("Please fill required fileds");
      return false;
    } else {
      alert("submitted successfully");

      submitBtn.style.display = "none";
      resetBtn.style.display = "none";
      getDataBtn.style.display = "block";

      setDetailsToLocalStorageFn();
      resetAllInputFieldsFn();

      return true;
    }
  });
}

submitDetailsFn();

//------Form All Filed submission and Validations Closed---------//

// -------Reset Button Function for page refresh opened------------------//
function resetPageFn() {
  resetBtn.setAttribute("title", "Refresh Page");
  resetBtn.addEventListener("click", () => {
    location.reload();
  });
}
resetPageFn();
// -------Reset Button Function for page refresh closed------------------//

//----------Get details from local Storage opened----------//

function getDetailsFromLSFn() {
  getDataBtn.addEventListener("click", () => {
    let getUserDataFromLS = localStorage.getItem("userCredentials");

    let convertStrToObj = JSON.parse(getUserDataFromLS);

    fullName.value = convertStrToObj.user_name;
    email.value = convertStrToObj.user_email;
    password.value = convertStrToObj.user_password;
    mobileNumber.value = convertStrToObj.user_mobile;
    imgTag.src = convertStrToObj.user_profilePic;
    stateSelect.value = convertStrToObj.user_state;
    citySelect.value = convertStrToObj.user_city;
    pinCode.value = convertStrToObj.user_pincode;
    if (convertStrToObj.user_gender == "Male") {
      male.checked = true;
    }
    if (convertStrToObj.user_gender == "Female") {
      female.checked = true;
    }
    if (convertStrToObj.user_maritalStatus == "Single") {
      single.checked = true;
    }
    if (convertStrToObj.user_maritalStatus == "Married") {
      married.checked = true;
    }
    let languagesArray = convertStrToObj.user_knownLanguages.split(",");
    console.log(languagesArray);
    if (languagesArray.includes("Hindi")) {
      hindi.checked = true;
    }
    if (languagesArray.includes("Telugu")) {
      telugu.checked = true;
    }
    if (languagesArray.includes("English")) {
      english.checked = true;
    }
    if (languagesArray.includes("Tamil")) {
      tamil.checked = true;
    }
    fullName.disabled = true;
    email.disabled = true;
    password.disabled = true;
    mobileNumber.disabled = true;
    stateSelect.disabled = true;
    citySelect.disabled = true;

    radios.forEach((event) => {
      event.disabled = true;
    });

    checkboxes.forEach((event) => {
      event.disabled = true;
    });

    signUpContainer.classList.add("bgmBlurr");
    loader.style.display = "block";
    setTimeout(() => {
      loader.style.display = "none";
    }, 2000);
    setTimeout(() => {
      signUpContainer.classList.remove("bgmBlurr");
      selectBtn.style.display = "none";
      getDataBtn.style.display = "none";
      editDataBtn.style.display = "block";
    }, 2200);
  });
}
getDetailsFromLSFn();

//----------Get details from local Storage Closed----------//

//-----------Edit Details Function opened----------//

function editDetailsFn() {
  editDataBtn.addEventListener("click", () => {
    fullName.disabled = false;
    email.disabled = false;
    password.disabled = false;
    mobileNumber.disabled = false;
    stateSelect.disabled = false;
    citySelect.disabled = false;

    radios.forEach((event) => {
      event.disabled = false;
    });

    checkboxes.forEach((event) => {
      event.disabled = false;
    });

    selectBtn.style.display = "block";
    saveDataBtn.style.display = "block";
    editDataBtn.style.display = "none";
  });
}
editDetailsFn();

//-----------Edit Details Function Closed----------//

//-----------Update Details Function opened----------//
function updateDetailsFn() {
  saveDataBtn.addEventListener("click", () => {
    setDetailsToLocalStorageFn();

    signUpContainer.classList.add("bgmBlurr");
    loader.style.display = "block";
    setTimeout(() => {
      loader.style.display = "none";
    }, 3000);
    setTimeout(() => {
      alert("Details Successfully updated");
      window.location.href = "./index.html";
    }, 3100);
  });
}
updateDetailsFn();

//-----------Update Details Function Closed----------//
