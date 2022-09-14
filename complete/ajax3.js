let xhr = new XMLHttpRequest();

let json = JSON.stringify({
    firstName: "Johny",
    lastName: "'Depp",
    Address: "123 noida",
    City: "Noida"
});

xhr.open("POST", '/submit')
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

xhr.send(json);