let tasks = [];

function addTask() {
 const taskInput = document.getElementById("taskInput");
 const taskName = taskInput.value.trim();

 if (taskName != "") {
   const newTask = {
    name: taskName,
    creatDate: new Date(),
    completed: false,

  };
    
    tasks.push(newTask);
    dispalyTasks();
    taskInput.value = ""
 };

    console.log(tasks);
}

function toggleTask(index){
     task[index].completed = !task[index].completed;
    displayTasks();
}

function displayTasks() {
 const taskList = document.getElementById("taskList");
 taskList.innerHTML = "";
  task.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = <span>${task.name}</span>;
     <span>${formatDate(task.createElement)}</span>;
    li.textContent = task.name + task.creatDate;
    li.className = task.completed ? "completed" : "" ;
    li.onclick = () => toggleTask(index);
    taskList.appendChild(li);
  });
}

function formatDate(date){
    const options = {year: "numeric", month: "short", day:"numer"}
    return date.toLocaleDateString("pt-BR", options);
}
displayTasks()