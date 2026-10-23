const lista = document.getElementById("ft_list");

//funcao para quando o usuario clica em um botao e para quando a lista e carregada usando cookies

function criarTarefa(texto) {
    const div = document.createElement("div"); // cria uma div
    div.textContent = texto; // coloca o texto dentro da div

    //remover a tarefa ao clicar nela
    div.addEventListener("click", function () {
        if (confirm("Deseja remover esta tarefa?")) {
            div.remove();
            salvarLista(); //salvar a lista sempre que a lista mudar
        }
    });

    return div; // retorna a div criada
}

//controi o botao adicionar tarefa

const botao = document.getElementById("adicionar");

botao.addEventListener("click", function () {
    const texto = prompt("Digite a nova tarefa:");

    if (texto === null || texto.trim() === "") {
        return; // cancelou ou deixou vazio: não faz nada
    }

    const tarefa = criarTarefa(texto.trim()); //com a funcao criatarefa ele cria a tarefa e adiciona dentro da constante tarefa
    lista.prepend(tarefa); //ele adiciona usando o metodo prepend
    salvarLista(); //salvar a lista sempre que a lista mudar
});

//salvar a lista com cookies

function salvarLista() {
    const tarefas = [];

    for (const div of lista.children) {
        tarefas.push(div.textContent);
    }

    document.cookie = "tarefas=" + encodeURIComponent(JSON.stringify(tarefas))
        + "; max-age=31536000; path=/";
}

//carregar a lista quando ela abrir

function carregarLista() {
    const cookie = document.cookie.split("; ").find(c => c.startsWith("tarefas=")); //parte a a string do cookie e procura a string que começa com tarefas

    if (!cookie) {
        return; // não há cookie: a lista fica vazia
    }

    const tarefas = JSON.parse(decodeURIComponent(cookie.substring(8)));

    for (const texto of tarefas) {
        lista.appendChild(criarTarefa(texto)); //child coloca no final da lista, prepend coloca no inicio da lista
    }
}

carregarLista(); //executa a funcao