function openTab(evt, tabName) {
    // Esconde todos os conteúdos das abas
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // Remove a classe "active" de todos os botões
    const navBtns = document.getElementsByClassName("nav-btn");
    for (let i = 0; i < navBtns.length; i++) {
        navBtns[i].classList.remove("active");
    }

    // Exibe a aba atual e adiciona a classe "active" ao botão clicado
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}
