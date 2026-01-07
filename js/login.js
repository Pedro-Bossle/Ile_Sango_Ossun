const admins = [
    { email: "tiagoeb123", pass: "12345" },
    { email: "rosangela123", pass: "12345" }
];

document.getElementById("acessar__adm").addEventListener("click", function () {
    const email = document.getElementById("userlogin").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    const validUser = admins.find(admin => admin.email === email && admin.pass === password);

    if (validUser) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "../index.html";
    } else {
        error.style.display = "block";
    }
});
