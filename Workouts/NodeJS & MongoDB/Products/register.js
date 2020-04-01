function register() {
    var data = {
        name: document.getElementById("name").value,
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };
    fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(function (data) {
            console.log(data.json())
        })
}