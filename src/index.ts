import { addTask, findTask, toggleTask, filterTasks, type Task } from "./tasks";

let tasks: Task[] = [];
tasks = addTask(tasks, "Read Chapter 1");
tasks = addTask(tasks, "Write notes");

for (const id of [1, 99]) {
  const task = findTask(tasks, id);
  console.log(task ? task.title : `Task ${id} not found`);
}

tasks = toggleTask(tasks, 1);
console.log(filterTasks(tasks, "done"));
console.log(filterTasks(tasks, "open"));