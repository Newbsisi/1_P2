

var objPeople = [
    {
        username: "Simon",
        password: "1234"
    },
    {
        username: "Nikolaj",
        password: "5678"
    },
    {
        username: "Søren",
        password: "1567"
    }
]




function logIn() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for (let i = 0; i <objPeople.length; i++){
        if (username === objPeople[i].username && password === objPeople[i].password) {
            console.log(username + "\tis logged in")
            window.location.href="/views/searchSide.pug"
        } else {
            console.log("Incorrect username or password")
        }
    }








}