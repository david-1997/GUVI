async function login() {
    var data = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };
    var resData = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    var rData = await resData.json();
    var jwtoken = (rData.token);
    localStorage.setItem('token', jwtoken);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", jwtoken);
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    var resData = await fetch("http://localhost:3000/dashboard", requestOptions)
    var finalData = await resData.json();
    localStorage.setItem("email", finalData.email)
    localStorage.setItem("userid",rData.userid)
    location.replace("dashboard.html");
}