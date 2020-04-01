var email = localStorage.getItem("email");
window.onload = document.getElementById("edit").style.display = "none";
async function insert() {
    var data = {
        email: localStorage.getItem("email"),
        product: document.getElementById("prodname").value,
        quantity: document.getElementById("quantity").value
    };
    var res = await fetch("http://localhost:3000/insert", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    var list = await res.json();
    console.log(list);
    showCart();
}

async function showCart() {
    var res = await fetch("http://localhost:3000/display", {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "content-Type": "application/json"
        }
    });

    var cartItems = await res.json();
    cart.innerHTML = "";
    var tabrow = cart.insertRow();
    var hd1 = tabrow.insertCell(0);
    hd1.innerHTML = "Product";
    var hd2 = tabrow.insertCell(1);
    hd2.innerHTML = "Quantity";
    var hd3 = tabrow.insertCell(2);
    hd3.innerHTML = "Delete";
    var hd4 = tabrow.insertCell(3);
    hd4.innerHTML = "Edit";
    for (i = 0; i < cartItems.length; i++) {
        var row = cart.insertRow();
        var cell1 = row.insertCell(0);
        cell1.innerHTML = cartItems[i].product;
        var cell2 = row.insertCell(1);
        cell2.innerHTML = cartItems[i].quantity;
        var cell3 = row.insertCell(2);
        button1 = document.createElement("button");
        button1.id = cartItems[i]._id
        button1.innerHTML = "Delete";
        cell3.appendChild(button1);
        (function (i) {
            button1.onclick = function () {
                var rowid = row.parentNode.parentNode.rowIndex;
                deleteItem(cartItems[i].product,cartItems[i]._id);
            }
        })(i);
        var cell4 = row.insertCell(3);
        cell4.id = "cell4." +i;
        button2 = document.createElement("button");
        button2.id = cartItems[i]._id
        button2.innerHTML = "Edit";
        cell4.appendChild(button2);
        (function (i) {
            button2.onclick = function () {
                updateItem(cartItems[i].product,cartItems[i]._id)
            }
        })(i);
    }
}

async function deleteItem(item,id) {
    var data = { product: item ,_id:id}
    console.log(data);
    var res = await fetch("http://localhost:3000/delete/"+data._id, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    var finalData = await res.json()
    console.log(finalData);
    showCart();
}

async function updateItem(item,id) {
    var data = {
        product: document.getElementById("prodname").value,
        quantity: document.getElementById("quantity").value
    }
    console.log(data);
    var resData = await fetch("http://localhost:3000/update/"+ id, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    var finalData = await resData.json();
    console.log(finalData);
    showCart();
}

async function logout() {
    var res = await fetch("http://localhost:3000/logout", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "content-Type": "application/json"
        },
    })
    var finalData = await res.json();
    console.log(finalData);
    localStorage.clear();
    location.replace("login.html");
}

function close() {
    window.close();
}