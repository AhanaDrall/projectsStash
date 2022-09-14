var role = sessionStorage.getItem("role")
var AmId = sessionStorage.getItem("Employee-name")

if (role != 2) document.getElementById("manager").style.display = 'none'
fetchLeaveRequests();
function fetchLeaveRequests() {
    fetch("https://localhost:44315/api/leave/" + AmId,
        {
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


            console.log(data);
            let li = ``;
            data.forEach((EmployeeFetch) => {

                console.log(EmployeeFetch);

                var sdate = `${EmployeeFetch.sdate}`;
                var yyyy = sdate.slice(0, 4)
                var mm = sdate.slice(5, 7)
                var dd = sdate.slice(8, 10)
                sdate = mm + "/" + dd + "/" + yyyy

                var edate = `${EmployeeFetch.edate}`;
                var yyyy = edate.slice(0, 4)
                var mm = edate.slice(5, 7)
                var dd = edate.slice(8, 10)
                edate = mm + "/" + dd + "/" + yyyy

                var reason = `${EmployeeFetch.reason}`;
                reason = reason.replace("'", "~");
                console.log(reason)
                li += `<tr>
              
              <td>${EmployeeFetch.id}</td>
              <td>${EmployeeFetch.empname} </td>
              <td>${sdate}</td>
              <td>${edate}</td>
              <td>${EmployeeFetch.reason}</td>
              <td>${EmployeeFetch.type}</td>
                <td> <a href="#!" onclick="approveRequest('${EmployeeFetch.empname}',${EmployeeFetch.leaveid},${EmployeeFetch.id},${EmployeeFetch.typeid},'${EmployeeFetch.sdate}','${EmployeeFetch.edate}','${reason}')" class="label theme-bg text-white f-12 rounded">Approve</a> <a href="#!" onclick="rejectRequest('${EmployeeFetch.empname}',${EmployeeFetch.leaveid},${EmployeeFetch.id},${EmployeeFetch.typeid},'${EmployeeFetch.sdate}','${EmployeeFetch.edate}','${reason}')" class="label theme-bg2 text-white f-12 rounded">Reject</a></td>         
                
                </tr>`;

            });
            document.getElementById("managerLeaveRequests").innerHTML = li;
        });
}


function approveRequest(name, lId, eId, typeId, sDate, eDate, reason) {
    console.log(name)
    console.log(lId)
    console.log(eId)
    console.log(typeId)
    console.log(sDate)
    console.log(eDate)
    reason = reason.replace("~", "'");
    console.log(reason)
    var Leave = {
        "id": eId,
        "typeid": typeId,
        "sdate": sDate,
        "edate": eDate,
        "reason": reason,
        "status": "Approved",
    };
    console.log(Leave);
    var urlUpdate = "https://localhost:44315/api/leave/" + lId.toString();
    console.log(urlUpdate);
    fetch(urlUpdate, {
        method: "PUT",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer",
        body: JSON.stringify(Leave),
    })
        .then(response => response.json())
        .then((result) => {
            fetchLeaveRequests();
        });

    fetch("https://localhost:44315/api/employee/getmanageremailid/" + name.toString(), {
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
        // body: JSON.stringify(Leave),
    })
        .then(response => response.json())
        .then((result) => {

            var email = result[0].emailid;

            var Body = 'Hey ' + "<b>" + name + "</b>" + ', Your Leave has been <b>Approved.</b>';


            Email.send({
                SecureToken: "15310dfc-5ba6-423d-8644-4b455b088f7c",
                To: email,
                From: "hrmscygrp@gmail.com",
                Subject: "Leave Approved",
                Body: Body
            }).then(
                message => {
                    //console.log (message);
                    if (message == 'OK') {
                        swal({
                            icon: 'success',
                            text: 'Leave Approved Successfully',
                        });
                    }
                    else {
                        console.error(message);
                        swal({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Leave Approval Failed',

                        });

                    }

                }
            );
        });
}

function rejectRequest(name, lId, eId, typeId, sDate, eDate, reason) {
    console.log(lId)
    console.log(eId)
    console.log(typeId)
    console.log(sDate)
    console.log(eDate)
    reason = reason.replace("~", "'");
    console.log(reason)
    var Leave = {
        "id": eId,
        "typeid": typeId,
        "sdate": sDate,
        "edate": eDate,
        "reason": reason,
        "status": "Rejected",
    };
    console.log(Leave);
    var urlUpdate = "https://localhost:44315/api/leave/" + lId.toString();
    console.log(urlUpdate);
    fetch(urlUpdate, {
        method: "PUT",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer",
        body: JSON.stringify(Leave),
    })
        //.then(response => response.json())
        .then((result) => {
            fetchLeaveRequests();
        });
    var url2 = "https://localhost:44315/api/employee/getmanageremailid/" + name.toString();

    fetch(url2, {
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
        // body: JSON.stringify(Leave),
    })
        .then(response => response.json())
        .then((result) => {

            var email = result[0].emailid;

            var Body = 'Hey ' + "<b>" + name + "</b>" + ', Your Leave has been <b>Rejected.</b>';


            Email.send({
                SecureToken: "15310dfc-5ba6-423d-8644-4b455b088f7c",
                To: email,
                From: "hrmscygrp@gmail.com",
                Subject: "Leave Rejected",
                Body: Body
            }).then(
                message => {
                    //console.log (message);
                    if (message == 'OK') {
                        swal({
                            icon: 'success',
                            text: 'Leave Rejected Successfully',
                        });
                    }
                    else {
                        console.error(message);
                        swal({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Leave Rejection Failed',

                        });

                    }

                }
            );
        });
}

