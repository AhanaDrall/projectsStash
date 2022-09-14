fetch("https://localhost:44315/api/Employee/GetEmployeeName")
  .then((res) => res.json())
  .then((data) => {
    //   console.log(data);
    let options = "<option>" + "Select Employee" + "</option>";
    for (var i = 0; i < data.length; i++) {
      // console.log(data[i]['id'])
      let x = "<option>" + `${data[i]["empname"]}` + "</option>";
      options += x;
    //   console.log(options)
    }
    $("#allEmployeeList").html(options);
  });


$("#allEmployeeList").on("click", function () {
  var empName = $(this).val();
  console.log(empName);
  if (empName == "Select Employee") {
    document.getElementById("approvedWfh").innerHTML=""
    document.getElementById("approvedCl").innerHTML=""
    document.getElementById("approvedSl").innerHTML=""
    document.getElementById("approvedEl").innerHTML=""
    document.getElementById("approvedLwp").innerHTML=""
    document.getElementById("approvedMl").innerHTML=""
    document.getElementById("approvedBl").innerHTML=""


  } else {
    fetch("https://localhost:44315/api/Employee/GetEmpid/" + empName)
      .then((res) => res.json())
      .then((id) => {
        console.log(id);

        // Work From Home Leaves Balance
        fetch("https://localhost:44315/api/leave/GetWFHLeaveTable/" + id, {
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
            var c = 0;
            for (var i = 0; i < data.length; i++) {
              c += data[i].days;
            }
            const t = document.getElementById("totalWfh").innerHTML;
            c=t-c;
            c+="/"
            document.getElementById("approvedWfh").innerHTML=c
          });

        // Casual Leave Balance
        fetch("https://localhost:44315/api/leave/GetCLLeaveTable/" + id, {
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
            var c = 0;
            for (var i = 0; i < data.length; i++) {
              c += data[i].days;
            }
            const t = document.getElementById("totalCl").innerHTML;
            c=t-c;
            c+="/"
            document.getElementById("approvedCl").innerHTML=c

          });

        // Sick Leave Balance
        fetch("https://localhost:44315/api/leave/GetSLLeaveTable/" + id, {
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
            var c = 0;
            for (var i = 0; i < data.length; i++) {
              c += data[i].days;
            }
            const t = document.getElementById("totalSl").innerHTML;
            c=t-c;
            c+="/"
            document.getElementById("approvedSl").innerHTML=c
          });

        // Earned Leave Balance
        fetch("https://localhost:44315/api/leave/GetELLeaveTable/" + id, {
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
            var c = 0;
            for (var i = 0; i < data.length; i++) {
              c += data[i].days;
            }
            const t = document.getElementById("totalEl").innerHTML;
            c=t-c;
            c+="/"
            document.getElementById("approvedEl").innerHTML=c
          });

        // Leave Without Pay Balance
        fetch("https://localhost:44315/api/leave/GetLWPLeaveTable/" + id, {
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
            var c = 0;
            for (var i = 0; i < data.length; i++) {
              c += data[i].days;
            }
            const t = document.getElementById("totalLwp").innerHTML;
            c=t-c;
            c+="/"
            document.getElementById("approvedLwp").innerHTML=c
          });

        // Marital Leave Balance
        fetch("https://localhost:44315/api/leave/GetMLLeaveTable/" + id, {
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
            var c = 0;
            for (var i = 0; i < data.length; i++) {
              c += data[i].days;
            }
            const t = document.getElementById("totalMl").innerHTML;
            c=t-c;
            c+="/"
            document.getElementById("approvedMl").innerHTML=c
          });

        // Bereavement Leave Balance
        fetch("https://localhost:44315/api/leave/GetBLLeaveTable/" + id, {
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
            var c = 0;
            for (var i = 0; i < data.length; i++) {
              c += data[i].days;
            }
            const t = document.getElementById("totalBl").innerHTML;
            c=t-c;
            c+="/"
            document.getElementById("approvedBl").innerHTML=c
          });
      });
  }
});
setTimeout(function() { 
    const select = document.querySelectorAll("select");
    const options = Array.from(select[0].options);
    console.log(options);
    const input = document.querySelector("input");
  
    function findMatches(search, options) {
      return options.filter((option) => {
        const regex = new RegExp(search, "gi");
        return option.text.match(regex);
      });
    }
  
    function filterOptions() {
      options.forEach((option) => {
        option.remove();
        option.selected = false;
      });
      const matchArray = findMatches(this.value, options);
      select[0].append(...matchArray);
    }
  
    input.addEventListener("change", filterOptions);
    input.addEventListener("keyup", filterOptions);
 }, 500);
