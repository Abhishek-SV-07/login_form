const API_URL = "https://login-form-ln3n.onrender.com"; // Update with your backend URL

document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });

    const result = await response.json();
    if (result.success) {
        console.log("Login successful!");
        window.location.href = "loggedin.html";
    } else {
        console.log("Login failed!");
        alert("Invalid credentials! Please try again.");
    }
});
