## while await fetch(...) is waiting for a response, what is the rest of your program allowed to do?
  While 'await fetch(...)' is waiting for response, it only function it is in, not whole program. The rest of the programcan keep running and do other work in the meantime. When the response arrives, the paused function continues from where it stopped.

## Why is Promise.all faster?
  The sequential version waits for each request to finish before starting the next one, so the waiting times add up. With `Promise.all`, all requests start at once and wait at the same time, so the total time is about as long as the slowest single request.

## Why do we need a timeout?
  Even if a server is usually fast, it can sometimes hang or respond very slowly because of network problems or heavy load. Without a timeout, `await fetch(...)` could wait forever, and the user can see a frozen page with no error. The timeout let the app give up after a fixed time, show an error, and let the user try again.