
    // função que adiciona uma nova tafera
function addTask() {
        // var que optem o valor adicionado no input
    var taskInput = document.getElementById("taskInput").value;

        //para verificar se há valores no input
    if (taskInput !== "") {
            // para adicionar um item de lista
        var listItem = document.createElement("li");

            // para adicionar um texto na lista
        listItem.appendChild(document.createTextNode(taskInput));

            // para adicionar um novo item a lista
        document.getElementById("taskList").appendChild(listItem);

            // aqui para limpar o campo do imput
        document.getElementById("taskInput").value = "";
    }
};

    // botão de remover tarefa
document.getElementById("taskList").addEventListener("click", function(e) {
    if (e.target && e.target.nodeName === "LI") {
        e.target.parentNode.removeChild(e.target);
    }
});

// bloquador númerico do inputs - nome
document.getElementById('taskInput').addEventListener('input', function(event) {
    let inputValue = event.target.value;
    event.target.value = inputValue.replace(/[0-9-£$%&*()_=+§±]/g, '');
});