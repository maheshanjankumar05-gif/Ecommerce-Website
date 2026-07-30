document.getElementById("loginForm").addEventListener("submit", function(event){

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const user = JSON.parse(localStorage.getItem("user"));

    if(!user){
        alert("No account found. Please register first.");
        return;
    }

    if(email === user.email && password === user.password){

        alert("Login Successful!");

        localStorage.setItem("loggedIn","true");

        window.location.href = "index.html";

    }else{

        alert("Invalid Email or Password");

    }

});