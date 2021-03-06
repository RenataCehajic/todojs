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
      checkbox.style.color = colorPicker; 
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

  function createTodo(title, colorPicker, datePicker) {
    // create a label
    const label = document.createElement("label");
    // create a checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = false;
    // add the "change" event listener to the checkbox
    checkbox.addEventListener("change", toggleDone);
    // and add the checkbox to the label
    label.appendChild(checkbox);
  
    // create a text node with the given title
    const labelText = document.createTextNode(" " + title);
    // and add the text node to the label
    label.appendChild(labelText);

    const dateSpan = document.createElement("span"); 
    dateSpan.innerHTML = datePicker; 

    label.appendChild(dateSpan); 
    
    // create a list item
    const listItem = document.createElement("li");
    listItem.className = "todo";
    listItem.style.color = colorPicker; 
    // and add the label to it
    listItem.appendChild(label);
  
    // add the list item to the todo list
    const list = document.getElementById("todolist");
    list.appendChild(listItem);
  }
  
  document
    .querySelector("form")
    .addEventListener("submit", function addNewTodo(event) {
      event.preventDefault();
  
      const inputField = document.querySelector("#new-todo");
      let colorPicker = document.getElementById("color").value; 
      let datePicker = document.getElementById("start").value; 
      
      const newTodoTitle = inputField.value;
      createTodo(newTodoTitle, colorPicker, datePicker);
  
      // reset the value of the inputField to make it empty and
      // ready to create new todos
      inputField.value = null;
  
      updateCounters();
    });

    function cleanUpDoneTodos() {
        // get all the "done" items""
        const doneItems = document.querySelectorAll(".completed");
        // loop through the "done" todo items
        for (let i = 0; i < doneItems.length; i++) {
            doneItems[i].remove();
          // and remove them from the DOM
        }
      
        // update the counters
        updateCounters();
      }
      
      // retrieve the link
      document.getElementById("clean-up").addEventListener("click", cleanUpDoneTodos);

      // add an event listener for a click on the link to the cleanUpDoneTodos function
    