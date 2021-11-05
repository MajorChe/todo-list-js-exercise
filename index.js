function newTask(title,description) {
  const task = {
    title: title,
    complete: false,
    description: description,
    logTaskState: function() {
      console.log(`${task.title} has ${task.complete ? "" : "not"} been completed!!`);
    },
    isComplete: function() {
      this.complete = true;
    }
  };
  return task;
}

const task1 = newTask('Paint',"Paint the picture with different colors.");
const task2 = newTask('Code', "Try to solve atleast the first 50 question from https://projecteuler.net/ ");
const tasks = [task1,task2];

task1.logTaskState();
task1.isComplete();
task1.logTaskState();
