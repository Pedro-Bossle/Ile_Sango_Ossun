window.addEventListener("DOMContentLoaded", function () {
    // Verifica se está logado
    if (localStorage.getItem("loggedIn") === "true") {
        const header = document.querySelector("header");

        // Lista de links do menu admin
        const isInPages = window.location.pathname.includes('/pages/');
        const adminLinks = [
            { text: "Mensalidades", href: isInPages ? "mensalidades.html" : "./pages/mensalidades.html" },
            { text: "Membros", href: isInPages ? "membros.html" : "./pages/membros.html" },
            { text: "Editar Eventos", href: isInPages ? "eventosADM.html" : "./pages/eventosADM.html" },
            { text: "Editar Catálogo", href: isInPages ? "catalogoADM.html" : "./pages/catalogoADM.html" }
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

        //Alterar botão de login (desktop)
        const botaoLogin = document.getElementById("botaoLogin");

        if (botaoLogin) {
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
    }
})
