let taskMaster = [];
document.addEventListener("DOMContentLoaded", () => {

  // Make sure the page isn't re-directed
  document.querySelector("#create-task-form").addEventListener("submit", e => {
          e.preventDefault();
       //console.log(e.target["new-task-description"].value)
      let newTask = e.target["new-task-description"].value
      const newTaskButton = document.createElement('button');
      taskMaster.push(newTaskButton);
      newTaskButton.textContent = newTask;
      document.getElementById("list").appendChild(newTaskButton);
        console.log(taskMaster);
  })
});




                                      /* Some Ideas
          > Create an empty array taskMaster[];
          > Have that array fill up with each 'task' that's been submitted by the user
          > I think the array needs to be accessed by the HTML portion
          > Have it so anytime a user submits something new it's pushed (push()) into the array
          > when that button array is clicked it's sliced (slice());
          > Probably have to do a for i = 0; etc to get the array # in the list to slice
          */
         