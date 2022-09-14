var id = sessionStorage.getItem("id")
console.log(id)

// Work From Home Leaves Balance
fetch("https://localhost:44315/api/leave/GetWFHLeaveTable/" + id,
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
        var c = 0;
        for (var i = 0; i < data.length; i++) {
            c += data[i].days
        }
        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
        const total = document.getElementById("totalWfh").innerHTML;
        const obj = document.getElementById("approvedWfh");
        const remaining = total - c;
        animateValue(obj, 0, remaining, 500);
    });

// Casual Leave Balance
fetch("https://localhost:44315/api/leave/GetCLLeaveTable/" + id,
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
        var c = 0;
        for (var i = 0; i < data.length; i++) {
            c += data[i].days
        }
        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        const total = document.getElementById("totalCl").innerHTML;
        const obj = document.getElementById("approvedCl");
        const remaining = total - c;
        animateValue(obj, 0, remaining, 500);
    });

// Sick Leave Balance
fetch("https://localhost:44315/api/leave/GetSLLeaveTable/" + id,
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
        var c = 0;
        for (var i = 0; i < data.length; i++) {
            c += data[i].days
        }
        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        const total = document.getElementById("totalSl").innerHTML;
        const obj = document.getElementById("approvedSl");
        const remaining = total - c;
        animateValue(obj, 0, remaining, 500);
    });

// Earned Leave Balance
fetch("https://localhost:44315/api/leave/GetELLeaveTable/" + id,
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
        var c = 0;
        for (var i = 0; i < data.length; i++) {
            c += data[i].days
        }
        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        const total = document.getElementById("totalEl").innerHTML;
        const obj = document.getElementById("approvedEl");
        const remaining = total - c;
        animateValue(obj, 0, remaining, 500);
    });

// Leave Without Pay Balance
fetch("https://localhost:44315/api/leave/GetLWPLeaveTable/" + id,
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
        var c = 0;
        for (var i = 0; i < data.length; i++) {
            c += data[i].days
        }
        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        const total = document.getElementById("totalLwp").innerHTML;
        const obj = document.getElementById("approvedLwp");
        const remaining = total - c;
        animateValue(obj, 0, remaining, 500);
    });

// Marital Leave Balance
fetch("https://localhost:44315/api/leave/GetMLLeaveTable/" + id,
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
        var c = 0;
        for (var i = 0; i < data.length; i++) {
            c += data[i].days
        }
        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        const total = document.getElementById("totalMl").innerHTML;
        const obj = document.getElementById("approvedMl");
        const remaining = total - c;
        animateValue(obj, 0, remaining, 500);
    });

// Bereavement Leave Balance
fetch("https://localhost:44315/api/leave/GetBLLeaveTable/" + id,
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
        var c = 0;
        for (var i = 0; i < data.length; i++) {
            c += data[i].days
        }
        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        const total = document.getElementById("totalBl").innerHTML;
        const obj = document.getElementById("approvedBl");
        const remaining = total - c;
        animateValue(obj, 0, remaining, 500);
    });





// **************************************************************
// -------------------PROFILE DETAILS----------------------------
// **************************************************************


// var id = sessionStorage.getItem("id")

fetch("https://localhost:44315/api/employee/getemp/" + id,
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
        window.sessionStorage.setItem("Employee-name", data.empname)

        window.sessionStorage.setItem("Manager-name", data.amid)
        document.getElementById("empname").value = data.empname
        document.getElementById("emailid").value = data.emailid
        var nickname = document.getElementById("emailid").value;
        document.getElementById("nickname").value = nickname.slice(0, -10)

        document.getElementById("desg").value = data.desg
        document.getElementById("contact").value = data.contact
        document.getElementById("amid").value = data.amid
    });