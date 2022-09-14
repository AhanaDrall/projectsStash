// ****************************************************
// *********************FETCH DATA*********************
// ****************************************************
function EmployeeFetchData() {
  fetch("https://localhost:44315/api/employee", {
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer",
  })
    .then((res) => res.json())
    .then((data) => {
      let li = ``;
      data.forEach((e) => {
        li += `<tr>                  
                    <td>${e.empname}</td>
                    <td>${e.emailid} </td>
                    <td>${e.desg}</td>
                    <td>${e.contact}</td>
                    <td>${e.amid}</td>    
                   
                    <td> <a href="#!" onclick="changeStatus(${e.id},'${e.empname}','${e.emailid}','${e.password}','${e.desg}','${e.contact}','${e.amid}',${e.role},'${e.isActive}')" class="label theme-bg text-white f-12 rounded" data-toggle="modal" data-target="#update2" >Update </a></td>         
                                       
                  </tr>`;
      });
      document.getElementById("currentemployeedata").innerHTML = li;
    })
    .catch(function (error) {
      console.log("Looks like there was a problem: \n", error);
    });

  // Past employyeee data
  fetch("https://localhost:44315/api/employee/past", {
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer",
  })
    .then((res) => res.json())
    .then((data) => {
      let li = ``;
      data.forEach((e) => {
        li += `<tr>                  
                <td>${e.empname}</td>
                <td>${e.emailid} </td>
                <td>${e.desg}</td>
                <td>${e.contact}</td>
                <td>${e.amid}</td>    
               
                <td> <a href="#!" onclick="changeStatus(${e.id},'${e.empname}','${e.emailid}','${e.password}','${e.desg}','${e.contact}','${e.amid}',${e.role},'${e.isActive}')" class="label theme-bg text-white f-12 rounded" data-toggle="modal" data-target="#update2" >Update </a></td>                                    
              </tr>`;
      });
      document.getElementById("pastemployeedata").innerHTML = li;
    })
    .catch(function (error) {
      console.log("Looks like there was a problem: \n", error);
    });
}

function changeStatus(id, name, email, pwd, des, contact, amid, role, status) {
  window.sessionStorage.setItem("PatchID", id);
  console.log(contact);
  document.getElementById("emp_name").value = name;
  document.getElementById("emp_emailid").value = email;
  document.getElementById("emp_contact").value = contact;
}
function update() {
  var name = document.getElementById("emp_name").value;
  var emailid = document.getElementById("emp_emailid").value;
  var contact = document.getElementById("emp_contact").value;
  var id = window.sessionStorage.getItem("PatchID");

  const e = document.getElementById("emp_desg");
  const EmployeeDesg = e.options[e.selectedIndex].text;
  const x = document.getElementById("manager_namelist");
  const Amid = x.options[x.selectedIndex].text;
  const y = document.getElementById("activeList");
  const Active = y.options[y.selectedIndex].text;

  var role;
  if (EmployeeDesg == "Manager") {
    role = 2;
  } else {
    role = 3;
  }
  var Employee = {
    empname: name,
    emailid: emailid,
    desg: EmployeeDesg,
    contact: contact,
    amid: Amid,
    role: role,
    isActive: Active,
  };
  console.log(Employee);
  fetch("https://localhost:44315/api/employee/" + id.toString(), {
    method: "PATCH",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer",
    body: JSON.stringify(Employee),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      EmployeeFetchData();
    });
}

EmployeeFetchData();

// ****************************************************
// ****************FORM VALIDATION*********************
// ****************************************************
const form = document.getElementById("form");
const username = document.getElementById("empname");
const email = document.getElementById("empemailid");
const password = document.getElementById("emppass");
const contact = document.getElementById("empcontact");
const e = document.getElementById("empdesg");
const x = document.getElementById("managernamelist");

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const contactValue = contact.value.trim();
  const EmployeeDesg = e.options[e.selectedIndex].text;
  const EmployeeAM = x.options[x.selectedIndex].text;

  if (usernameValue === "")
    setErrorFor(username, "Employee Name cannot be blank");
  else {
    setSuccessFor(username);
    if (emailValue === "") setErrorFor(email, "Email cannot be blank");
    else if (!isEmail(emailValue)) setErrorFor(email, "Email is not valid");
    else {
      setSuccessFor(email);
      if (passwordValue === "")
        setErrorFor(password, "Password cannot be blank");
      else if (!isPassword(passwordValue))
        setErrorFor(
          password,
          "Minimum 8 characters, 1 uppercase & 1 lowercase letter, 1 number & 1 special character"
        );
      else {
        setSuccessFor(password);
        if (contactValue === "")
          setErrorFor(contact, "Phone Number cannot be blank");
        else if (!isPhone(contactValue))
          setErrorFor(contact, "Phone Number is not valid");
        else {
          setSuccessFor(contact);
          if (EmployeeDesg === "" || EmployeeDesg == "Select Designation")
            setErrorFor(e, "Designantion cannot be blank");
          else {
            setSuccessFor(e);
            if (EmployeeAM === "" || EmployeeAM == "Select Leave Approver")
              setErrorFor(x, ":Leave Approver cannot be blank");
            else {
              setSuccessFor(x);
              AddEmployee();
              $("#staticBackdrop").modal("hide");
            }
          }
        }
      }
    }
  }
}

function clearModal() {
  $("#staticBackdrop").on("hidden.bs.modal", function () {
    $(this).find("form").trigger("reset");
  });
}

// ****************************************************
// *************ADD USER FORM VALIDATION****************
// ****************************************************
function setErrorFor(input, message) {
  const formCtrl = input.parentElement; //.form-control

  const small = formCtrl.querySelector("small");
  console.log(formCtrl);

  console.log(small);

  //add error message inside small
  small.innerText = message;

  //add error class
  formCtrl.className = "form-ctrl error";
}
function setSuccessFor(input) {
  const formCtrl = input.parentElement; //.form-control
  formCtrl.className = "form-ctrl success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isPhone(contact) {
  return /^(\d{10})|(\d{3}\s\d{3}\s\d{4})|(\d{3}\.\d{3}\.\d{4})|(\d{3}-\d{3}-\d{4})|(\d{3}\.\d{3}\.\d{4})|(\(\d{3}\)(\.|\s|)\d{3}\.\d{4})|(\(\d{3}\)(-|\s|)\d{3}-\d{4})|(\(\d{3}\)\s\d{3}\s\d{4})$/.test(
    contact
  );
}

function isPassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    password
  );
}
// ****************************************************
// *********************ADD DATA*********************
// ****************************************************
function AddEmployee() {
  var EmployeeName = document.getElementById("empname");
  var EmployeeEmailId = document.getElementById("empemailid");
  var EmployeePassword = abc();
  var EmployeeContact = document.getElementById("empcontact");
  var e = document.getElementById("empdesg");
  var EmployeeDesg = e.options[e.selectedIndex].text;
  var x = document.getElementById("managernamelist");
  var EmployeeAM = x.options[x.selectedIndex].text;

  var EmployeeRole = null;
  if (EmployeeDesg == "Manager") EmployeeRole = 2;
  else EmployeeRole = 3;

  var tempUser = {
    empname: EmployeeName.value,
    emailid: EmployeeEmailId.value,
    password: EmployeePassword,
    desg: EmployeeDesg,
    contact: EmployeeContact.value,
    amid: EmployeeAM,
    role: EmployeeRole,
    IsActive: "Active",
  };
  console.log(tempUser);
  fetch("https://localhost:44315/api/employee", {
    method: "POST",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer",
    body: JSON.stringify(tempUser),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("upar");
      EmployeeFetchData();
      console.log("niche");
    });
}
// ****************************************************
// ***********PASSWORD ENCRYPTION*********************
// ****************************************************
function abc() {
  var a = document.getElementById("emppass").value;
  const key = "55a51621a6648525";
  const keyutf = CryptoJS.enc.Utf8.parse(key);
  const iv = CryptoJS.enc.Base64.parse(key);
  const enc = CryptoJS.AES.encrypt(a, keyutf, { iv: iv });
  const encStr = enc.toString();
  console.log("encStr", encStr);
  return encStr;
}
