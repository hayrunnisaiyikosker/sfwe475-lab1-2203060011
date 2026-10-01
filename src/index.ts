import { addTask, findTask, toggleTask, filterTasks, type Task } from "./tasks";

let tasks: Task[] = [];
tasks = addTask(tasks, "Read Chapter 1");
tasks = addTask(tasks, "Write notes");

for (const id of [1, 99]) {
  const result = findTask(tasks, id);
  if (result.ok) {
    console.log(result.task.title);
  } else {
    console.log(result.error);
  }
}

tasks = toggleTask(tasks, 1);
console.log(filterTasks(tasks, "done"));
console.log(filterTasks(tasks, "open"));

const first = tasks[0];
if (first !== undefined) {
  console.log(first.title);
}