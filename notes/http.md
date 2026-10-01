| Question | Your answer |
|---|---|
| Method | GET |
| Status code | 200 |
| Content-Type response header | application/json; charset=utf-8 |
| What is in the body? | {"userId": 1, "id": 1, "title": "delectus aut autem", "completed": false} |


404 is in the 4xx family, which means a client error: the request was understood, but the problem is on the client's side, here because no todo with id 99999 exists. And also, the server returned an empty body "{}".


- Scheme: https
- Host: jsonplaceholder.typicode.com
- Path: /todos/99999

## Stretch

6. The query string is `userId=1`. It filters the todos, so only the ones with userId 1 are returned.

7. A GET request only asks the server to send data back, so it reads. A POST request sends data to the server, for example a login form, so the server can process it. In my test, the login form sent a POST request and the server answered with status 303, which is a redirect.

## Challenge

8. The response has `cache-control: max-age=43200`, so a browser may keep it for 12 hours, and there is no `no-store` or `private`, so it looks safe to cache. `expires: -1` and `pragma: no-cache` seem to say the opposite, but `cache-control` takes priority over them, so I still think caching is safe.