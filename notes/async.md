## while await fetch(...) is waiting for a response, what is the rest of your program allowed to do?
  While 'await fetch(...)' is waiting for response, it only function it is in, not whole program. The rest of the programcan keep running and do other work in the meantime. When the response arrives, the paused function continues from where it stopped.

## Why is Promise.all faster?
  The sequential version waits for each request to finish before starting the next one, so the waiting times add up. With `Promise.all`, all requests start at once and wait at the same time, so the total time is about as long as the slowest single request.

## Why do we need a timeout?
  Even if a server is usually fast, it can sometimes hang or respond very slowly because of network problems or heavy load. Without a timeout, `await fetch(...)` could wait forever, and the user can see a frozen page with no error. The timeout let the app give up after a fixed time, show an error, and let the user try again.

## Runtime vs compile-time
TypeScript only checks types at compile time, and it does not look at data coming from the internet. `response.json()` returns `any`, which accepts everything, so when we said "this is a Task", TypeScript could not reject it.
At runtime, reading `todo.done` gave us `undefined`. We did not get any error message; the error stayed silent. This is dangerous because the bug can go unnoticed for a long time.

## Another unchecked boundary
  In `tasks.ts`, `dueDate` is a boundary. The type says `string`, but it must be a valid date. A value coming from outside is not guaranteed to be correct. If the value is invalid, TypeScript does not warn us, and the code silently returns `NaN`.