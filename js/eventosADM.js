const adicionarNovoBtn = document.getElementById("addNew__event")
const containerLista = document.getElementsByClassName("adm__eventos__container")


adicionarNovoBtn.addEventListener("click", () => {
    limparTela()
    gerarTelaNovoEvento()
})

function limparTela() {
    for (const container of containerLista) {
        container.innerHTML = "";
    }
}

function gerarTelaNovoEvento() {
    const html = `
    <div id="adm__edit__screen" class="adm__eventos__edit__screen">
        <h2 class="eventos__edit__screen__title">Criar Novo Evento</h2>
        <div class="adm__eventos__edit__screen__2">
            <div>
                <div class="adm__eventos__edit__screen__box">
                    <label for="evento-nome" class="evento__edit__title">Título do Evento</label>
                    <input id="evento-nome" type="text" placeholder="Nome">
                    <label for="evento-data" class="evento__edit__title">Data</label>
                    <input id="evento-data" type="date" placeholder="DD/MM/AAAA">
                    <label for="evento-horario" class="evento__edit__title">Horário</label>
                    <input id="evento-horario" type="time" placeholder="00:00">
                    <label for="evento-endereco" class="evento__edit__title">Endereço</label>
                    <input id="evento-endereco" type="text" placeholder="Rua Visconde de Pelotas - Pio X, Caxias do Sul - RS, 95020-500">
                    <div class="type-button-container">
                        <div class="toggle-wrapper">
                            <input class="toggle-checkbox" type="checkbox" id="evento-publico">
                            <div class="toggle-container">
                                <div class="toggle-button">
                                    <div class="toggle-button-circles-container">
                                        <div class="toggle-button-circle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <label for="evento-publico" class="botao__texto">Público</label>
                    </div>
                </div>
            </div>
            <div>
                <div class="adm__eventos__edit__screen__box">
                    <div class="type-button-container">
                        <div class="toggle-wrapper">
                            <input class="toggle-checkbox" type="checkbox" id="evento-kimbanda">
                            <div class="toggle-container">
                                <div class="toggle-button">
                                    <div class="toggle-button-circles-container">
                                        <div class="toggle-button-circle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <label for="evento-kimbanda" class="botao__texto">Kimbanda</label>
                    </div>
                    <div class="type-button-container">
                        <div class="toggle-wrapper">
                            <input class="toggle-checkbox" type="checkbox" id="evento-umbanda">
                            <div class="toggle-container">
                                <div class="toggle-button">
                                    <div class="toggle-button-circles-container">
                                        <div class="toggle-button-circle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <label for="evento-umbanda" class="botao__texto">Umbanda</label>
                    </div>
                    <div class="type-button-container">
                        <div class="toggle-wrapper">
                            <input class="toggle-checkbox" type="checkbox" id="evento-nacao">
                            <div class="toggle-container">
                                <div class="toggle-button">
                                    <div class="toggle-button-circles-container">
                                        <div class="toggle-button-circle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <label for="evento-nacao" class="botao__texto">Nação</label>
                    </div>
                </div>
                <img class="evento__edit__img" src="../assets/logos/Nação.png" alt="Nação">
            </div>
        </div>
        <div class="eventos__edit__screen__buttons">
            <button class="button__delete" id="btn-deletar" type="submit">Deletar</button>
            <button class="button__back" id="btn-voltar" type="submit">Voltar</button>
            <button class="button__save" id="btn-salvar" type="submit">Salvar</button>
        </div>
    </div>`;
    if (containerLista.length > 0) {
        containerLista[0].innerHTML = html;
        const btnSalvar = document.getElementById("btn-salvar");
        if (btnSalvar) {
            btnSalvar.addEventListener("click", () => {
                criarEvento();
            });
        }
    }
}

async function criarEvento(evento) {
    evento.preventDefault()

}


function mostraItens() { 
    const eventosJson=URL("./jsons/eventos.json")
    console.log(eventosJson)
}

mostraItens()