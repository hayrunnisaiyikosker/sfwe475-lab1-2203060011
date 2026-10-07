import type { Task } from "./schemas";

export function addTask(tasks: Task[], title: string): Task[] {
  const id = tasks.length + 1;
  return [...tasks, { id, title, done: false }];
}

export type FindResult =
  | { ok: true; task: Task }
  | { ok: false; error: string };

export function findTask(tasks: Task[], id: number): FindResult {
  const task = tasks.find((t) => t.id === id);
  if (task === undefined) {
    return { ok: false, error: `Task ${id} not found` };
  }
  return { ok: true, task };
}

export function daysUntilDue(task: Task): number |undefined {
  if (task.dueDate === undefined) return undefined;
  const due = new Date(task.dueDate);
  return Math.ceil((due.getTime() - Date.now()) / 86_400_000);
}

export function toggleTask(tasks: Task[], id: number): Task[] {
  return tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
}

export type Filter = "all" | "done" | "open";

export function filterTasks(tasks: Task[], filter: Filter): Task[] {
  if (filter === "all") return tasks;
  return tasks.filter((t) => (filter === "done" ? t.done : !t.done));
}