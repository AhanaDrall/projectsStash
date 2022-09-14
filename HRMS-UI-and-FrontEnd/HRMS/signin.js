function check() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

 
  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  }

  else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
  }
  else {
    setSuccessFor(email);
  }
  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  }
  else {
    setSuccessFor(password);
  }
  if (window.sessionStorage.getItem("token") != false) {

    login();
  }

}

function login() {
  var EmailId = document.getElementById("email");
  var Password = encryptPassword();
  fetch("https://localhost:44315/api/login",
    {
      method: "POST",
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {

        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        "emailid": EmailId.value,
        "password": Password,
      }),

    })
    //.then(response => response.json())
    .then((result) => result.json())
    .then((response) => {
      var role = `${response.role}`;
      var token = `${response.tokenString}`;
      var id = `${response.id}`;

      window.sessionStorage.setItem("token", token);
      window.sessionStorage.setItem("id", id);
      window.sessionStorage.setItem("role", role);
      window.sessionStorage.setItem("email", EmailId.value);

      if (window.sessionStorage.getItem("token").toString() != "false") {
        if (window.sessionStorage.getItem("role") == "1") {
          console.log("hello")
          window.open("./ADMIN/index.html", "_self");
        }
        else {
          window.open("./MANAGER_EMPLOYEE/index.html", "_self");
        }
        swal({
          icon: 'success',
          title: 'Login successful',
          text: 'Proceed!',

        });

      } else if (email.value === '' && password.value === '') {
        swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Incomplete credentials',
    
        });
      } else if (email.value === '' && password.value != '') {
        swal({
          icon: 'error',
          title: 'Oops...',
          text: 'E-mail Required.',
    
        });
      } else if (email.value != '' && password.value === '') {
        swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Password Required.',
    
        });
      }
      else {
     
        swal({
        icon: 'error',
          title: 'Invalid Credentials',
         text: 'Try Again!',

         });
      }
    });

}

function encryptPassword() {
  var a = document.getElementById("pwd").value;
  console.log(a);
  const key = '55a51621a6648525';
  const keyutf = CryptoJS.enc.Utf8.parse(key);
  const iv = CryptoJS.enc.Base64.parse(key);
  const enc = CryptoJS.AES.encrypt(a, keyutf, { iv: iv });
  const encStr = enc.toString();
  console.log('encStr', encStr);
  return encStr;


}
// ----------------- SWAL ALERT ----------------- 

const email = document.getElementById('email');
const password = document.getElementById('pwd');



function setErrorFor(input, message) {

  const formCtrl = input.parentElement; //.form-control

  const small = formCtrl.querySelector('small');
  console.log(formCtrl)

  console.log(small)

  //add error message inside small
  small.innerText = message;

  //add error class
  formCtrl.className = 'form-ctrl error';
}
function setSuccessFor(input) {
  const formCtrl = input.parentElement; //.form-control
  formCtrl.className = 'form-ctrl success';
}
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
var otp = '';
var temp='';
function getOtp() {
  var email = document.getElementById("forgot-email").value;      
  window.sessionStorage.setItem("abcd",email);
    var digits = '0123456789';
    var otpLength = 6;  
    for(let i=1; i<=otpLength; i++)
    {

        var index = Math.floor(Math.random()*(digits.length));
        otp = otp + digits[index];
        temp=otp;

    }
      var Body = 'Dear Sir/Madam, <br>Your One Time Password(OTP) :<br><strong>'+temp+'</strong><br>Your OTP will expire in 5 min.<br>Do not share your OTP with anyone else.<br><br>Warm Regards,<br>HRMS ,Cyber Group Inc';

      Email.send({
        SecureToken: "15310dfc-5ba6-423d-8644-4b455b088f7c",
        To: email,
        From: "hrmscygrp@gmail.com",
        Subject: "One Time Password ",
        Body: Body
      }).then(
        message => {
           if (message == 'OK') {
            
            console.log('Your OTP has been sent. Thank you for connecting.');
          }
          else {
            console.error(message);
            
            console.log('There is error at sending message. ')

          }

        }
      );
      otp='';
    
}
function checkOtp(){
  var input=document.getElementById("otp").value
  if(temp==input) {   
    window.open("http://127.0.0.1:5500/HRMS/otp.html","_self");    
  }      
}






