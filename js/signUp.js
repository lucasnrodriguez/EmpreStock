const registerForm = document.querySelector("#registerForm");
const PORT = 3001;
const SERVER_URL = `http://localhost:${PORT}`;

async function registerUser(e) {
    e.preventDefault()
    const username = registerForm.username.value;
    const password = registerForm.password.value;

    const response = await fetch(SERVER_URL + "/auth/register", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username, password }) });

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const data = await response.json();
    console.log(data)
    return data;
};

registerForm.addEventListener("submit", registerUser);



