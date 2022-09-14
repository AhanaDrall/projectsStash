function fetchUser() {
  fetch("https://localhost:44301/api/student", {
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
      

      console.log(data);
      let li = `<tr><th>Id</th><th>FirstName</th><th>LastName</th><th>Address</th><th>City</th><th>Action</th></tr>`;
      data.forEach((tempUser) => {
        //console.log(user);
        li += `<tr>
              <td>${tempUser.id} </td>
              <td>${tempUser.firstName}</td>
              <td>${tempUser.lastName} </td>
              <td>${tempUser.address}</td>
              <td>${tempUser.city}</td>
              <td>  <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
               
              <div  class="btn-group me-2" role="group" aria-label="Second group">
                <button type="button" onclick="updateUser(${tempUser.id})" class="btn btn-success" data-toggle="modal" data-target="#myModal" >Update</button>
                
              </div>
              <div class="btn-group" role="group" aria-label="Third group">
                <button type="button" onclick="deleteUser(${tempUser.id})" class="btn btn-danger" style="background-color:pink" >Delete</button></td>
            
                </tr>`;
      });
      document.getElementById("userTable").innerHTML = li;
      console.log("worked");

      // do something with data
    })
    .catch(function (error) {
      debugger;

      console.log("Looks like there was a problem: \n", error);
    });

    
}
function addUser() {
  var TempFname = document.getElementById("fname");
  var TempLname = document.getElementById("lname");
  var TempAddress = document.getElementById("address");
  var TempCity = document.getElementById("city");
  var tempUser = {
    FirstName: TempFname.value,
    LastName: TempLname.value,
    Address: TempAddress.value,
    City: TempCity.value,
  };
  console.table(tempUser);
  fetch("https://localhost:44301/api/student", {
  
  

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
  
    //.then(response => response.json())
    .then((result) => {

      console.log("testing123");
      console.log(result);
      
    });
    alert("You have been registered")
    // console.log("after fetch block");

   
}

function deleteUser(id) {
  console.log(id);
  var urlDelete = "https://localhost:44301/api/student/" + id.toString();
  // console.log(urlDelete);
  fetch(urlDelete, {
    method: "DELETE",
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
    .then((result) => {
      console.log(result);
    });
    
    window.location.reload();
    alert("deleted successfully");
}

function updateUser(id) {
  var TempFname = document.getElementById("firstNameData" + id.toString());
  var TempLname = document.getElementById("lastNameData" + id.toString());
  var TempAddress = document.getElementById("addressData" + id.toString());
  var TempCity = document.getElementById("cityData" + id.toString());
  var tempUser = {
    FirstName: TempFname.value,
    LastName: TempLname.value,
    Address: TempAddress.value,
    City: TempCity.value,
  };
  console.log(tempUser);
  var urlUpdate = "http://localhost:44301/api/student/" + id.toString();
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
    body: JSON.stringify(tempUser),
  })
    //.then(response => response.json())
    .then((result) => {
      console.log(result);
    });
}
