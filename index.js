// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescription = [];

function newTask (title,description) {
  const task = {
    title: title,
    complete: false,
    description: description
  };
  return task;
};

// Create a new task by adding to the arrays
// A new task will be created as incomplete
const task1 = newTask('Paint',"Paint the picture with different colors.");
const task2 = newTask('Code', "Try to solve atleast the first 50 question from https://projecteuler.net/ ");
const tasks = [task1,task2];
console.log(tasks);
// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`


// Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
