import { addTask, findTask, toggleTask, filterTasks, type Task } from "./tasks";
import { fetchTodo, fetchTodos, fetchTodosSequential } from "./api";

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

async function main() {
  const todo = await fetchTodo(1);
  console.log(todo);

    const ids = [1, 2, 3, 4, 5];

  console.time("sequential");
  await fetchTodosSequential(ids);
  console.timeEnd("sequential");

  console.time("parallel");
  await fetchTodos(ids);
  console.timeEnd("parallel");
}
 
main();
