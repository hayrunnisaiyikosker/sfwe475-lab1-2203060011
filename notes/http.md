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