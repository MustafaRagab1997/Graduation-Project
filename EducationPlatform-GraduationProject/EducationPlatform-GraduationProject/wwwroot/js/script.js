// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();

// // Get the modal
// var modal = document.getElementById('id01');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
// if (event.target == modal) {
//   modal.style.display = "none";
// }
// }

//////////////
// validation
var btn = document.getElementById("BtnSubmit");
var InputName = document.getElementById("Input_StudentName");
var IsValidName = false;

var InputUserName = document.getElementById("Input_Email");
var IsValidUserName = false;

var InputPassword = document.getElementById("Input_Password");
var IsValidPassword = false;
var InputConfirmPassword = document.getElementById("Input_ConfirmPassword");
var IsValidConfirmPassword = false;
var InputAddress = document.getElementById("Input_Address");
var IsValidAddress = false;
var InputPhone = document.getElementById("Input_Phone");
var IsValidPhone = false;
var spanValidName = document.getElementById("ValidName");

var spanValidUserName = document.getElementById("ValidUserName");

var spanValidPassword = document.getElementById("ValidPassword");
var spanValidConfirmPassword = document.getElementById("ValidConfirmPassword");
var spanValidAddress = document.getElementById("ValidAddress");
var spanValidphone = document.getElementById("ValidPhone");


//Vlaidate Name
function NameChange() {
  if (InputName.value.trim().length != 0) {
      if (/^[\u0621-\u064A_ ]+$/.test(InputName.value) == true) {
      InputName.style.border = "2px solid green";
      spanValidName.style.display = "none";
      IsValidName = true;
    } else {
      InputName.style.border = "2px solid red";
      spanValidName.style.display = "block";
        spanValidName.innerHTML = "اسم الطالب يجب ان يحتوي على حروف فقط";
      IsValidName = false;
    }
  } else {
    InputName.style.border = "2px solid red";
    spanValidName.style.display = "block";
    spanValidName.innerHTML = "يجب إدخال اسم الطالب ";
    IsValidName = false;
  }
}

//Validate Address
function AddressChange() {
  if (InputAddress.value.trim().length != 0) {
    InputAddress.style.border = "2px solid green";
    spanValidAddress.style.display = "none";
    IsValidAddress = true;
  } else {
    InputAddress.style.border = "2px solid red";
    spanValidAddress.style.display = "block";
    spanValidAddress.innerHTML = "يجب ادخال العنوان";
    IsValidAddress = false;
  }
}

//Validate Phone
function PhoneChange() {
  if (InputPhone.value.trim().length != 0) {
    var regexMobile = /^01[0125][0-9]{8}$/;
    if (regexMobile.test(InputPhone.value)) {
      InputPhone.style.border = "2px solid green";
      spanValidphone.style.display = "none";
      IsValidPhone = true;
    } else {
      InputPhone.style.border = "2px solid red";
      spanValidphone.style.display = "block";
      spanValidphone.innerHTML =
        "يجب ان يكون رقم الهاتف 11 رقم وان يبدأ ب (010 أو 011 أو 012 أو 015)";
      IsValidPhone = false;
    }
  } else {
    InputPhone.style.border = "2px solid red";
    spanValidphone.style.display = "block";
    spanValidphone.innerHTML = "يجب ادخال رقم الهاتف ";
    IsValidPhone = false;
  }
}

//Validate UserName
function UserNameChange() {
  if (InputUserName.value.trim().length != 0) {
    InputUserName.style.border = "2px solid green";
    spanValidUserName.style.display = "none";
    IsValidUserName = true;
  }else
  {
    InputUserName.style.border = "2px solid red";
    spanValidUserName.style.display = "block";
    spanValidUserName.innerHTML = "يجب ادخال اسم المستخدم  ";
    IsValidUserName = false;
  }
}

//Validate Password
function PasswordChange() {
  if (InputPassword.value.trim().length != 0) {
    var regularExpression =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (regularExpression.test(InputPassword.value)) {
      InputPassword.style.border = "2px solid green";
      spanValidPassword.style.display = "none";
      IsValidPassword = true;
    } else {
      InputPassword.style.border = "2px solid red";
      spanValidPassword.style.display = "block";
      spanValidPassword.innerHTML ="كلمة السر يجب أن تكون اطول من 7 حروف و أن تحتوي علي أرقام وحروف كبيرة و صغيرة و علامات ";
      IsValidPassword = false;
    }
  }else
  {
    InputPassword.style.border = "2px solid red";
    spanValidPassword.style.display = "block";
    spanValidPassword.innerHTML = "يجب ادخال كلمة السر    ";
    IsValidPassword = false;
  }
}

function ConfirmPasswordChange() {
  if (InputPassword.value == InputConfirmPassword.value) {
    InputConfirmPassword.style.border = "2px solid green";
    spanValidConfirmPassword.style.display = "none";
    IsValidConfirmPassword = true;
  } else {
    InputConfirmPassword.style.border = "2px solid red";
    spanValidConfirmPassword.style.display = "block";
    spanValidConfirmPassword.innerHTML = "كلمة المرور غير متاطبقة ";
    IsValidConfirmPassword = false;
  }
}

function validateForm() {
  if (
    IsValidName == true &&
    IsValidUserName == true &&
    IsValidPhone == true &&
    IsValidPassword == true &&
    IsValidConfirmPassword == true &&
    IsValidAddress == true
    ) {
    return true;
  }else{
    return false;
  }
}