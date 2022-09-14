function fetchUser() {
    fetch("https://localhost:44304/api/Employee/GetName", {
      mode: "no-cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer",
    })
      .then(res => res.json())
    
      .then((data) => {
        
  
        console.log(data);
        let lis = ``;
        data.forEach((tempUser) => {
          //console.log(user);
          lis += `<ull>
                <li>${tempUser.empname} </li>
                
                
                  </ul>`;
        });
        document.getElementById("userTable").innerHTML = lis;
        console.log("worked");
  
        // do something with data
      })
      .catch(function (error) {
        debugger;
  
        console.log("Looks like there was a problem: \n", error);
      });
  
      
  }