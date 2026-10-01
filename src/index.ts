import { addTask, findTask, type Task } from "./tasks";

let tasks: Task[] = [];
tasks = addTask(tasks, "Read Chapter 1");

for (const id of [1, 99]) {
  const task = findTask(tasks, id);
  console.log(task ? task.title : `Task ${id} not found`);
}