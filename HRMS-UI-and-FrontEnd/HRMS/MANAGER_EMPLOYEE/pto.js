var managername = sessionStorage.getItem("Manager-name");
fetch("https://localhost:44315/api/employee/GetManagerEmailid/" + managername)
  .then((response) => response.json())
  .then((data) => window.sessionStorage.setItem("managerMail", data[0].emailid));
getOpenLeaves();
// ------------------------------------------------------------
// --------------------  OPEN LEAVE OF  EMPLOYEEE -------------
// ------------------------------------------------------------
function clearForm() {
  $("#staticBackdrop").on("hidden.bs.modal", function () {
    $(this).find("form").trigger("reset");
  });
}

function getOpenLeaves() {
  var f = window.sessionStorage.getItem("id");
  fetch("https://localhost:44315/api/Leave/GetOpenedLeaveTable/" + f, {
    method: "GET",
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
    //.then(response => response.json())
    .then((result) => result.json())

    .then((data) => {
      let li = ``;
      data.forEach((EmployeeFetch) => {
        var sdate = `${EmployeeFetch.sdate}`;
        var yyyy = sdate.slice(0, 4);
        var mm = sdate.slice(5, 7);
        var dd = sdate.slice(8, 10);
        sdate = mm + "/" + dd + "/" + yyyy;

        var edate = `${EmployeeFetch.edate}`;
        var yyyy = edate.slice(0, 4);
        var mm = edate.slice(5, 7);
        var dd = edate.slice(8, 10);
        edate = mm + "/" + dd + "/" + yyyy;
        li += `<tr>               
       <td>${EmployeeFetch.type}</td>
       <td>${sdate} </td>               
       <td>${edate}</td>
       <td>${EmployeeFetch.status}</td>
       <td>${EmployeeFetch.amid}</td>                          
       </tr>`;
      });
      document.getElementById("openrequestleave").innerHTML = li;
    });
}

// *********************************************
// ---------------LEAVE VALIDATION -------------
// *********************************************

const form = document.getElementById("form");
const x = document.getElementById("leavetypeid");
const startdate = document.getElementById("leavesdate");
const enddate = document.getElementById("leaveedate");
const reason = document.getElementById("leavereason");

function checkModal() {
  const typeLeave = x.options[x.selectedIndex].text;
  const startdateValue = startdate.value.trim();
  const enddateValue = enddate.value.trim();
  const reasonValue = reason.value.trim();

  if (typeLeave === "" || typeLeave == "Select Leave Type")
    setErrorFor(x, "This field cannot be blank");
  else {
    setSuccessFor(x);
    if (startdateValue === "")
      setErrorFor(startdate, "This field cannot be blank");
    else {
      setSuccessFor(startdate);
      if (enddateValue === "")
        setErrorFor(enddate, "This field cannot be blank");
      else {
        setSuccessFor(enddate);
        if (reasonValue === "")
          setErrorFor(reason, "This field cannot be blank(MaxLength=200)");
        else {
          setSuccessFor(reason);
          AddNewLeave();
          getOpenLeaves();
          $("#staticBackdrop").modal("hide");
        }
      }
    }
  }
}
//-------------------------------------------------------------------------------
// ------------------------ GET LEAVES OF ALL STATUS AND PENDING -----------------
//-------------------------------------------------------------------------------

var f = window.sessionStorage.getItem("id");
fetch("https://localhost:44315/api/Leave/Getleavetable/" + f, {
  method: "GET",
  mode: "cors", // no-cors, *cors, same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "same-origin", // include, *same-origin, omit
  headers: {
    "Content-Type": "application/json",
  },
  redirect: "follow", // manual, *follow, error
  referrerPolicy: "no-referrer",
})
  .then((result) => result.json())
  .then((data) => {
    let li = ``;
    data.forEach((EmployeeFetch) => {
      sessionStorage.setItem("manager-name", EmployeeFetch.amid);
      var sdate = `${EmployeeFetch.sdate}`;
      var yyyy = sdate.slice(0, 4);
      var mm = sdate.slice(5, 7);
      var dd = sdate.slice(8, 10);
      sdate = mm + "/" + dd + "/" + yyyy;

      var edate = `${EmployeeFetch.edate}`;
      var yyyy = edate.slice(0, 4);
      var mm = edate.slice(5, 7);
      var dd = edate.slice(8, 10);
      edate = mm + "/" + dd + "/" + yyyy;
      li += `<tr>              
              <td>${EmployeeFetch.type}</td>
              <td>${sdate} </td>              
              <td>${edate}</td>
              <td>${EmployeeFetch.status}</td>
              <td>${EmployeeFetch.amid}</td>                         
              </tr>`;
    });
    document.getElementById("myrequestleave").innerHTML = li;
  });

function getOpenLeaves() {
  var f = window.sessionStorage.getItem("id");
  console.log(f);
  fetch("https://localhost:44315/api/Leave/GetOpenedLeaveTable/" + f, {
    method: "GET",
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
    //.then(response => response.json())
    .then((result) => result.json())

    .then((data) => {
      let li = ``;
      data.forEach((EmployeeFetch) => {
        var sdate = `${EmployeeFetch.sdate}`;
        var yyyy = sdate.slice(0, 4);
        var mm = sdate.slice(5, 7);
        var dd = sdate.slice(8, 10);
        sdate = mm + "/" + dd + "/" + yyyy;

        var edate = `${EmployeeFetch.edate}`;
        var yyyy = edate.slice(0, 4);
        var mm = edate.slice(5, 7);
        var dd = edate.slice(8, 10);
        edate = mm + "/" + dd + "/" + yyyy;
        li += `<tr>               
     <td>${EmployeeFetch.type}</td>
     <td>${sdate} </td>               
     <td>${edate}</td>
     <td>${EmployeeFetch.status}</td>
     <td>${EmployeeFetch.amid}</td>                          
     </tr>`;
      });
      document.getElementById("openrequestleave").innerHTML = li;
    });
}
//-------------------------------------------------------------------
// ------------------------- CLOSED LEAVE OF EMPLOYEE ---------------
//-------------------------------------------------------------------

fetch("https://localhost:44315/api/Leave/GetClosedLeaveTable/" + f, {
  method: "GET",
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
  //.then(response => response.json())
  .then((result) => result.json())

  .then((data) => {
    let li = ``;
    data.forEach((EmployeeFetch) => {
      var sdate = `${EmployeeFetch.sdate}`;
      var yyyy = sdate.slice(0, 4);
      var mm = sdate.slice(5, 7);
      var dd = sdate.slice(8, 10);
      sdate = mm + "/" + dd + "/" + yyyy;

      var edate = `${EmployeeFetch.edate}`;
      var yyyy = edate.slice(0, 4);
      var mm = edate.slice(5, 7);
      var dd = edate.slice(8, 10);
      edate = mm + "/" + dd + "/" + yyyy;
      li += `<tr>                
                <td>${EmployeeFetch.type}</td>
                <td>${sdate} </td>               
                <td>${edate}</td>
                <td>${EmployeeFetch.status}</td>
                <td>${EmployeeFetch.amid}</td>                           
                </tr>`;
    });
    document.getElementById("closerequestleave").innerHTML = li;
  });

//**********************************
// VALIDATION FUNCTIONS
//**********************************

function setErrorFor(input, message) {
  const formCtrl = input.parentElement;
  const small = formCtrl.querySelector("small");
  small.innerText = message;
  formCtrl.className = "form-ctrl error";
}
function setSuccessFor(input) {
  const formCtrl = input.parentElement; //.form-control
  formCtrl.className = "form-ctrl success";
}

// *********************************************
// --------------- ADD NEW LEAVE --------------
// *********************************************

function AddNewLeave() {
  var x = document.getElementById("leavetypeid");
  var Leavetype = x.options[x.selectedIndex].text;
  var leavetypeId;
  if (Leavetype == "Work From Home") leavetypeId = 1;
  else if (Leavetype == "Casual Leave") leavetypeId = 2;
  else if (Leavetype == "Sick Leave") leavetypeId = 3;
  else if (Leavetype == "Earned Leave") leavetypeId = 4;
  else if (Leavetype == "Leave Without Pay") leavetypeId = 5;
  else if (Leavetype == "Maternity Leave") leavetypeId = 6;
  else if (Leavetype == "Bereavement Leave") leavetypeId = 7;

  var id = sessionStorage.getItem("id");
  var leavesdate = document.getElementById("leavesdate");
  var leaveddate = document.getElementById("leaveedate");
  var leaveReason = document.getElementById("leavereason");

  var leave = {
    id: id,
    typeid: leavetypeId,
    sdate: leavesdate.value,
    edate: leaveddate.value,
    reason: leaveReason.value,
    status: "Pending",
  };
  console.log(leave);
  fetch("https://localhost:44315/api/leave", {
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
    body: JSON.stringify(leave),
  })
    .then((response) => response.json())
    .then((result) => {
      getOpenLeaves();
    });
  var sd = $("#leavesdate").val();
  var ed = $("#leaveedate").val();
  var managerMail = sessionStorage.getItem("managerMail");
  var employeeName = sessionStorage.getItem("Employee-name");
  var reason = $("#leavereason").val();

  var Body =
    "Hi " +
    managername +
    ", <br> " +
    employeeName +
    " has requested a leave from " +
    sd +
    " to " +
    ed +
    " reason being " +
    reason +
    "." +
    "<br>Please respond accordingly.";

  Email.send({
    SecureToken: "15310dfc-5ba6-423d-8644-4b455b088f7c",
    To: managerMail,
    From: "hrmscygrp@gmail.com",
    Subject: "Leave Request - " + employeeName,
    Body: Body,
  }).then((message) => {
    if (message == "OK") {
      swal({
        icon: "success",
        text: "Leave Applied Successfully",
      });
    } else {
      console.error(message);
      swal({
        icon: "error",
        title: "Oops...",
        text: "Leave Failed",
      });
    }
  });
}
