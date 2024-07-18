const PORT = 3001;
const SERVER_URL = `http://localhost:${PORT}`;

//REGISTRO
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("usernameSignup").value;
    const password = document.getElementById("passwordSignup").value;
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    };

    //Petición asíncrona
    fetch(`${SERVER_URL}/auth/register`, options)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Error al registrarse");
            }
            return res.json();
        })
        .then((data) => {
            alert("Registro exitoso. Por favor, inicia sesión.");
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("Error al registrarse");
        });
});

//LOGIN
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("usernameLogin").value;
    const password = document.getElementById("passwordLogin").value;
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    };

    // Petición asíncrona
    fetch(`${SERVER_URL}/auth/login`, options)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Error al iniciar sesión");
            }
            return res.json();
        })
        .then((data) => {
            localStorage.setItem("token", data.token);
            alert("Inicio de sesión exitoso");
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("Error al iniciar sesión");
        });
});


