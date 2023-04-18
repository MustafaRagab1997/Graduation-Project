var InputName = document.getElementById("StName");
var IsValidName = true;

var InputAddress = document.getElementById("Address");
var IsValidAddress = true;

var InputPhone = document.getElementById("Phone");
var IsValidPhone = true;

var spanValidName = document.getElementById("ValidName");
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

function validateForm() {
    if (
        IsValidName == true &&      
        IsValidPhone == true && 
        IsValidAddress == true
    ) {
        console.log("on true");
        return true;
    } else {
        console.log("on false");
        return false;
    }
}