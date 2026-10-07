# Reflection

## Lab 1

1. What is the difference between a 404 and a 500?
  These are coming from different status code families(4xx, 5xx). 404 is client error, means not found The request is valid, but the resource that was asked for does not exist, like the todo with id 99999. 500 is a server error, means the request is fine, but the server failed while handling it.

2. Why does TypeScript strict mode reject tasks.find(...) as a Task return type?
  if "find" does not find what it looking for, it returns "undefined". if the return type just "Task", The function promises to return a task every time, which is not true. If TypeScript allowed this, the program could crash at runtime, so the return type must be `Task | undefined` and we must check it before using it.
  
3. Why do we work on a branch instead of committing to main?
  Because we can check every change before its merged. if we work with teammates, it's the easiest way to work together: if someone makes a mistake, it can be fixed easily on the branch and we have the chance to review it goes to the main. This way main always stays in a working state.

## Lab 2

1. Why does await only pause the function it's inside, not the whole program?
  `await` only pauses the `async` function it is in, not the whole JavaScript program. While the function is waiting, control goes back to the calling code and the rest of the program keeps running. When the response comes, the function continues from the place where it stopped.

2. Why didn't TypeScript complain when fetchTodo returned Task?
  TypeScript only checks types at compile time, and it does not look at the real data that comes from the internet. `response.json()` returns `any`, and `any` accepts everything. When the data did not match `Task`, nothing failed during compilation, and we only saw `undefined` at runtime.

3. What is the difference between parse() and safeParse()?
  `parse()` throws an error when the data is invalid, so the program can crash. `safeParse()` does not throw; it returns an object with either the data or the error. `createTask` uses `safeParse()` because invalid data from outside is a common situation, so we return a clear failure result instead of crashing.