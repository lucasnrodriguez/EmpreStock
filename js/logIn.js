const loginForm = document.querySelector("#loginForm");
const PORT = 3001;
const SERVER_URL = `http://localhost:${PORT}`;

async function loginUser(e) {
    e.preventDefault()
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    const response = await fetch(SERVER_URL + "/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username, password }) });

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const data = await response.json();
    console.log(data)

    window.location.href = "/front/index.html"
};

loginForm.addEventListener("submit", loginUser);