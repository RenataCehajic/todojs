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

  function toggleDone(event) {
    // get the checkbox from the event object
    const checkbox = event.currentTarget; 
    // check the checked status of the checkbox
    if (checkbox.checked) {
      // change the checkbox so that it shows up as completed
      checkbox.parentElement.parentElement.className = "todo completed";
    } else {
      // change the checkbox so that it shows up as todo
      checkbox.parentElement.parentElement.className = "todo"; 
    }
    // update the counters, now that we have updated the checkbox
    updateCounters();
  }
  
  // add a "change" event listener to every checkbox,
  // and use the "toggleDone" function as the callback
  
  const checkboxes = document.querySelectorAll(".todo input");
  
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", toggleDone);
  }