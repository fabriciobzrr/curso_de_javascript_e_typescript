// Seleção de elementos
const inputTasks = document.querySelector(".input-tasks")
const btnAdd = document.querySelector(".btn-add")
const taskLists = document.querySelector(".tasks-list")

btnAdd.addEventListener("click", (e) => {
  if (!inputTasks.value) return
  createTask(inputTasks.value)
})

inputTasks.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (!inputTasks.value) return
    createTask(inputTasks.value)
  }
})

function createTask(inputText) {
  const itemList = createLi()
  itemList.textContent = inputText
  taskLists.appendChild(itemList)
  clearInput()
  createBtnRemove(itemList)
  saveTask()
}

function createLi() {
  const li = document.createElement("li")
  li.classList.add("list-item")
  return li
}

function clearInput() {
  inputTasks.value = ""
  inputTasks.focus()
}

function createBtnRemove(itemList) {
  const btnRemove = document.createElement("button")
  btnRemove.classList.add("btn-remove")
  btnRemove.textContent = "X"
  itemList.appendChild(btnRemove)
}

document.addEventListener("click", (e) => {
  const el = e.target
  if (el.classList.contains("btn-remove")) {
    const itemRemove = el.closest(".list-item")
    itemRemove.remove()
    saveTask()
  }
})

function saveTask() {
  const tasksList = taskLists.querySelectorAll("li")
  const listTask = []
  for (let taskList of tasksList) {
    let textTask = taskList.textContent
    textTask = taskList.textContent.replace("X", "").trim()
    listTask.push(textTask)
  }

  const tasksJSON = JSON.stringify(listTask)
  localStorage.setItem("tasks", tasksJSON)
}

function addSaveTasks() {
  const tasks = localStorage.getItem("tasks")
  const listTask = JSON.parse(tasks)

  for (let taskList of listTask) {
    createTask(taskList)
  }
}
addSaveTasks()
