// let taskMaster = [];
document.addEventListener("DOMContentLoaded", () => {

  document.querySelector("#create-task-form").addEventListener("submit", e => {
    e.preventDefault();
    let newTask = e.target["new-task-description"].value;
    const newTaskLI = document.createElement('li');
    const taskText = document.createElement('span'); // This is the only way I could get the fucking task to be edited
    taskText.textContent = newTask; //Whatever we wrote is now solidified
    const xButton = document.createElement('button');
    xButton.textContent = "x";
    const editButton = document.createElement('button');
    editButton.textContent = "Edit task";
    document.getElementById("list").appendChild(newTaskLI);
    newTaskLI.appendChild(taskText);
    newTaskLI.appendChild(xButton);
    newTaskLI.appendChild(editButton); // Dude I had this as xButton.append and it put everything on top of eachother. fucked it all up
    e.target["new-task-description"].value = ""; // Clears out the Description box after input.
    /*
                  OKAY HERE WE GO WITH THE PRIORITY SHIT
    */
                  let pripri = document.querySelector("taskPriority");
                  const priorityChoice = x; // Replace later
                      if(priorityChoice == x){

                      } else if (priorityChoice == y){

                      } else if (priorityChoice == z){

                      }

       



        //// END PRIORITY SHIT
//// Okay lets try to make the x Button work
    xButton.addEventListener('click', () => {
      removeTask(newTaskLI); // I pray it's this simple when we edit it in the future. we'll see
    });
//// Okay let's try to make the edit button work
// For some reason the edit button only works once. I've tried removeEventListener, deleting and remaking none of it works.
    editButton.addEventListener('click', () => { 
            // We cant get it to edit twice, so maybe we do it as an if
      let descriptionBox = document.createElement('input'); // This was the best method I've used so far
      descriptionBox.type = 'text'; // Just makes it so I can type in here
      descriptionBox.value = taskText.textContent; // Fucking value.
      newTaskLI.replaceChild(descriptionBox, taskText);
      descriptionBox.addEventListener('blur', () => { // We need the user to have their info saved and edited
        let updatedTaskText = document.createElement('span'); // There is that span again <span>
        updatedTaskText.textContent = descriptionBox.value;
        newTaskLI.replaceChild(updatedTaskText, descriptionBox);
        editButton.replaceChild(editButton);
      });
    });
  });

  function removeTask(task) { // When I asked Ada for help, she made me move this code outside of everything.
    task.remove(); /// And I'm not sure why, because it worked inside too. Oh well! That's robots for you.
  }
});



                                      /* Some Ideas
          > Create an empty array taskMaster[];
          > Have that array fill up with each 'task' that's been submitted by the user
          > I think the array needs to be accessed by the HTML portion
          > Have it so anytime a user submits something new it's pushed (push()) into the array
          > when that button array is clicked it's sliced (slice());
          > Probably have to do a for i = 0; etc to get the array # in the list to slice
          */