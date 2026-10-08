let page1Container = document.querySelector(".page_container1");
let page2Container = document.querySelector(".page_container2");
let btnPage1 = document.querySelectorAll(".btn_page1")


//Evento para garantir que ambos os botões da página 1 tragam o layout da página 2
btnPage1.forEach(botao => {
    botao.addEventListener("click", () => {
        page1Container.style.display = "none"
        page2Container.style.display = "grid"
    });
});

function voltarPagina1() {
    page1Container.style.display = "flex";
    page2Container.style.display = "none";
};




