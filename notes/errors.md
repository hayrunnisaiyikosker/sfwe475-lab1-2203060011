# Strict-mode errors

1. 'index.ts:3', (TS7034) : let tasks = [] has no type, TypeScript cannot tell what array will hold and treats it as "any[]", which strict mode does not allow.
2. 'index.ts:4', (TS7005) : Same problem as above. we are using "tasks" for giving to the "addTask" but still has no type. the main problem is we didn't write the type to the variable.
3. 'tasks.ts:3', (TS7006) : in the "addTask" function we didn't write type to the "title" parameter. Which means that this is "implicitly any". In the strict mode it has to be write explicitly which type that parameter.
4. 'tasks.ts:5', (TS2322) : the new object does not match Task . Because done has the wrong type.
5. 'tasks.ts:5', (TS2322) : In the "Task" type , written "done:boolean" but we gave them "false" . But "false" and false are different things.Type 'string' is not assignable to type 'boolean'.
6. 'tasks.ts:9', (TS2322) : if "find" didn't find which element it returns "undefined". But the return type says always returns a "Task".
7. 'tasks.ts:13', (TS2769) : "dueDate" is optional property so may be undefined . "new Date()" does not accept "undefined". Before using it, we must check that "dueDate" exists. No overload matches this call. Argument of type 'string | undefined' is not assignable to parameter of type 'string | number'.