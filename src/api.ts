export async function fetchTodo(id: number) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    if (!response.ok) {
      console.error(`Server error: ${response.status}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Network error:", error);
    return null;
  }
}