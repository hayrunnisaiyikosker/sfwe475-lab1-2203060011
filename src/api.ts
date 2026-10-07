export async function fetchTodo(id: number) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3000);

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      { signal: controller.signal }
    );

    if (!response.ok) {
      console.error(`Server error: ${response.status}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.error("Request timed out after 3 seconds");
    } else {
      console.error("Network error:", error);
    }
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function fetchTodos(ids: number[]) {
  return Promise.all(ids.map((id) => fetchTodo(id)));
}

export async function fetchTodosSequential(ids: number[]) {
  const results: unknown[] = [];
  for (const id of ids) {
    results.push(await fetchTodo(id));
  }
  return results;
}