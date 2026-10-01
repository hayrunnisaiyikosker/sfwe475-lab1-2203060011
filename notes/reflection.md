# Reflection

1. What is the difference between a 404 and a 500?
  These are coming from different status code families(4xx, 5xx). 404 is client error, means not found The request is valid, but the resource that was asked for does not exist, like the todo with id 99999. 500 is a server error, means the request is fine, but the server failed while handling it.

2. Why does TypeScript strict mode reject tasks.find(...) as a Task return type?
  if "find" does not find what it looking for, it returns "undefined". if the return type just "Task", The function promises to return a task every time, which is not true. If TypeScript allowed this, the program could crash at runtime, so the return type must be `Task | undefined` and we must check it before using it.
  
3. Why do we work on a branch instead of committing to main?
  Because we can check every change before its merged. if we work with teammates, it's the easiest way to work together: if someone makes a mistake, it can be fixed easily on the branch and we have the chance to review it goes to the main. This way main always stays in a working state.
