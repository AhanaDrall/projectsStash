
console.log('started');

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);




function buttonClickHandler(){
    // console.log('you have clickked fetchBtn');
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://localhost:50524/api/student', true);

    // xhr.onprogress = function(){
    //     console.log('on progress');
    // }


    xhr.onload = function(){

        // let tableheaders = ["id", "firstName", "lastName", "address", "City"];
        var myBooks = this.responseText;
        console.log(this.responseText);
        console.log(myBooks);

        // var myBooks=[
        //     {
        //         "id": 1,
        //         "firstName": "ahana",
        //         "lastName": "drall",
        //         "address": "123, meerut",
        //         "city": "meerut"
        //     },
        //     {
        //         "id": 2,
        //         "firstName": "Syed",
        //         "lastName": "Ali",
        //         "address": "123, Dallas",
        //         "city": "Dallas"
        //     },
        //     {
        //         "id": 4,
        //         "firstName": "Avneet",
        //         "lastName": "Kaur",
        //         "address": "123, Delhi",
        //         "city": "Delhi"
        //     },
        //     {
        //         "id": 5,
        //         "firstName": "Abhishek",
        //         "lastName": "Sharma",
        //         "address": "123, Modinagar",
        //         "city": "Modinagar"
        //     },
        //     {
        //         "id": 6,
        //         "firstName": "Bhanuja",
        //         "lastName": "Agarwal",
        //         "address": "123, Punjab",
        //         "city": "Punjab"
        //     },
        //     {
        //         "id": 7,
        //         "firstName": "aparichit",
        //         "lastName": "rana",
        //         "address": "123, Rajhasthan",
        //         "city": "jaipur"
        //     }
        // ]
        

        // EXTRACT VALUE FOR HTML HEADER. 
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = [];
        for (var i = 0; i < myBooks.length; i++) {
            for (var key in myBooks[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < myBooks.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = myBooks[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);


        // document.getElementById('MyText').innerHTML=answer;
    }
    xhr.send();
}






// let postBtn = document.getElementById('postBtn');
// postBtn.addEventListener('click', buttonClickHandler);

// function buttonClickHandler(){
//     console.log('you have clickked postBtn');
//     const xhr = new XMLHttpRequest();

//     xhr.open('POST', 'http://localhost:50524/api/student', true);
//     xhr.getResponseHeader('Content-type', 'application/json');


//     xhr.onprogress = function(){
//         console.log('on progress');
//     }
//     xhr.onload = function(){
//         console.log(this.responseText);
//     }

//     params = {
        
//         "firstName": "aparichit",
//         "lastName": "rana",
//         "address": "123, new york",
//         "city": "new york"
//     }
//     xhr.send(params);
// }