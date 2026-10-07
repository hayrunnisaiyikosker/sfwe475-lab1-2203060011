import { addTask, findTask, toggleTask, filterTasks } from "./tasks";
import type { Task } from "./schemas";
import { fetchTodo, fetchTodos, fetchTodosSequential } from "./api";
import { TaskSchema, CreateTaskSchema } from "./schemas";

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
  const valid = { id: 1, title: "Read", done: false };
  const missingField = { id: 2, done: true };
  const wrongType = { id: 3, title: "Write", done: "yes" };

  for (const candidate of [valid, missingField, wrongType]) {
    const result = TaskSchema.safeParse(candidate);
    console.log(result.success, result.success ? "" : result.error.issues);
  }
  const emptyTitle = { id: 4, title: "", done: false };
  const negativeId = { id: -1, title: "Read", done: false };

  for (const candidate of [emptyTitle, negativeId]) {
    const result = TaskSchema.safeParse(candidate);
    console.log(result.success, result.success ? "" : result.error.issues);
  }
}
 
main();

const createOk = { title: "Buy milk" };
const createEmpty = { title: "" };
const createExtra = { title: "Call mom", id: 99, done: true };

for (const candidate of [createOk, createEmpty, createExtra]) {
  const result = CreateTaskSchema.safeParse(candidate);
  console.log(result.success, result.success ? result.data : result.error.issues);
}
