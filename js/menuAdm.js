window.addEventListener("DOMContentLoaded", function () {
    // Verifica se está logado
    if (localStorage.getItem("loggedIn") === "true") {
        const header = document.querySelector("header");

        // Lista de links do menu admin
        const adminLinks = [
            { text: "Mensalidades", href: "#" },
            { text: "Membros", href: "#" },
            { text: "Editar Eventos", href: "#" },
            { text: "Editar Catálogo", href: "#" }
        ];

        //  Criar menu admin desktop
        const navAdmin = document.createElement("nav");
        navAdmin.className = "nav-menu adm__only";

        adminLinks.forEach(item => {
            const link = document.createElement("a");
            link.href = item.href;
            link.textContent = item.text;
            link.className = "nav-item mobile__hide adm__only";
            navAdmin.appendChild(link);
        });

        header.appendChild(navAdmin);

        // Criar itens no menu mobile
        const mobileMenu = document.querySelector(".menu__lista");

        adminLinks.forEach(item => {
            const li = document.createElement("li");
            const link = document.createElement("a");
            link.href = item.href;
            link.textContent = item.text;
            link.className = "mobile__show menu__lista__item adm__only";
            li.appendChild(link);
            mobileMenu.appendChild(li);
        });

        //Alterar botão de login (desktop apenas)
        const botaoLogin = document.getElementById("botaoLogin");

        const loginText = botaoLogin.querySelector("p.mobile__hide");
        if (loginText) {
            loginText.textContent = "Logout";
        }

        //mobile botao
        botaoLogin.href = "#";
        botaoLogin.addEventListener("click", () => {
            localStorage.removeItem("loggedIn");
            location.reload();
        });
    }
});
