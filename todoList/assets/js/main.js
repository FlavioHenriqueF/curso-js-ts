const input = document.querySelector(".addNewTask");
const addTask = document.querySelector(".addTask");
const toDoList = document.querySelector(".tasks");

// CRIA A TAG HTML "LI"
function createLi() {
  const li = document.createElement("li");
  return li;
}

// PEGA O EVENTO DA TECLA ENTER SENDO PRESSIONADA
input.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    if (!input.value) return;
    createTask(input.value);
  }
});

//CRIA O BOTÃO DELETE ADD EM FRENTE AO LI E SETA O ATRIBUTO CLASS A ELE.
function createButtonDelete(li) {
  li.innerText += " ";
  const buttonDelete = document.createElement("button");
  buttonDelete.innerText = "Delete";
  buttonDelete.setAttribute("class", "delete");
  li.appendChild(buttonDelete);
}

// DA UM CLEAR NO IMPUT
function inputClear() {
  input.value = "";
  input.focus();
}

// CRIA A TAREFA
function createTask(textInput) {
  const li = createLi(); // Chama a func createLI(atribuindo a tag li a essa const)
  li.innerText = textInput;
  toDoList.appendChild(li); // coloca a const "Li" dentro de toDoList no caso a tag Ul
  createButtonDelete(li); // chama a função de criação do botão delete e a adiciona dentro da tag li
  inputClear(); //Chama a função de limpar o input.
  saveTasks();
}

// captura o evento de click no botão addTask
addTask.addEventListener("click", function () {
  if (!input.value) return;
  createTask(input.value);
});

// Captura o evento de click no botão delete
document.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("delete")) {
    el.parentElement.remove(); // Remove o parent do elemento no caso o parent do elemento button a tag "Li"
    saveTasks();
  }
});

function saveTasks() {
  const liTasks = toDoList.querySelectorAll("li");
  const list = [];

  for (let tasks of liTasks) {
    let taskText = tasks.innerText;
    taskText = taskText.replace("Delete", "").trim();
    list.push(taskText);
  }

  //Converte o array list em um JSON no formato string
  const tasksJSON = JSON.stringify(list);
  localStorage.setItem("tasks", tasksJSON); // Salva a variavel tasksJSON no localStorage do navegador
}

// Ja essa função tem o trabalho de Adicionar as tasks salvas no localStorage ao display
function addSavedTasks() {
  const tasks = localStorage.getItem("tasks"); //pega o valor salvo em "tasks" dentro do localStorage
  const toDoList = JSON.parse(tasks); // converte o valor de tasks em um array

  for (let task of toDoList) {
    createTask(task); // e depois passa a task salva para ser criada novamente.
  }
}

addSavedTasks();
