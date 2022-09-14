function submitQuery() {
    // console.log("testing");
    var tempEmail = document.getElementById("exampleInputEmail1");
    var tempCollege = document.getElementById("CollegeName");
    var tempIssue = document.getElementById("Query");
    //console.log(tempCollege);
    var tempQuery = {
      Email: tempEmail.value,
      College: tempCollege.value,
      Issue: tempIssue.value,
      
    };
    console.table(tempQuery);
    
    fetch("https://localhost:44301/api/issue", {

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
      body: JSON.stringify(tempQuery),
    })
    
      //.then(response => response.json())
      .then((result) => {
  
        console.log("testing123");
        console.log(result);
        
      });
      console.log("after fetch block");
  }