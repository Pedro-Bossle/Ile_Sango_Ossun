window.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "../pages/loginPage.html"
    } else {
        console.log("Seja bem vindo!")
    }
})
