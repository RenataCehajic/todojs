function updateCounters() {
    // Total number of todos
    const totalCount = document.getElementById("total-count");
    const totalTodos = document.getElementsByClassName("todo").length;
    totalCount.innerHTML = totalTodos;
  
    // Total number of completed todos
    const completedCount = document.getElementById("completed-count");
    const completedTodos = document.getElementsByClassName("completed").length;
    completedCount.innerHTML = completedTodos;
  
    // Total number of uncompleted todos
    const todoCount = document.getElementById("todo-count");
    const uncompletedTodos = totalTodos - completedTodos;
    todoCount.innerHTML = uncompletedTodos;
  }
  
  updateCounters();