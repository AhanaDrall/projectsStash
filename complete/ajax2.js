let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

let postBtn = document.getElementById("postBtn");
postBtn.addEventListener("click", buttonClickHandlerpost);

function buttonClickHandler() {
  console.log("You have clicked fetchbutton");
  
  const xhr = new XMLHttpRequest();

  

  xhr.open("GET", "http://localhost:50524/api/student", true);

  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

  xhr.onload = function () {
    // console.log(this.responseText);
    var answer = this.responseText;
    // var new2 = JSON.stringify(answer);
    document.getElementById("MyText").innerHTML = answer;
  };
  xhr.send();
}

function buttonClickHandlerpost() {
  console.log("you have clicked post button");

  let parameter = JSON.stringify({
    "firstName": "Aayushmanii",
    "lastName": "Khurana",
    "address": "123, new jersey",
    "city": "new york",
  });

  $.ajax({
    type: "POST",
    url: "http://localhost:50524/api/student",
    data: parameter,
    dataType: "application/json",
    success: function(resultData){
        alert("Save Complete");
    }
});


  // const xhr = new XMLHttpRequest();

  

  // xhr.open("POST", "http://localhost:50524/api/student", true);

  // // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

  // xhr.setRequestHeader("Content-type", "application/json");

  
  // xhr.send(parameter);
}
