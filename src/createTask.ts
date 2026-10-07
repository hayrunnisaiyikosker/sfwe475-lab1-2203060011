import { CreateTaskSchema, CreateTaskBatchSchema } from "./schemas";

export function createTask(payload: unknown) {
  const result = CreateTaskSchema.safeParse(payload);

  if (!result.success) {
    return { ok: false as const, error: result.error.flatten() };
  }

  return { ok: true as const, task: result.data };
}

export function createTasks(payload: unknown) {
  const list = CreateTaskBatchSchema.safeParse(payload);

  if (!list.success) {
    return { ok: false as const, error: list.error.flatten() };
  }

  const created: { index: number; task: { title: string } }[] = [];
  const failed: { index: number; error: Record<string, string[] | undefined> }[] = [];

  list.data.forEach((item, index) => {
    const result = createTask(item);
    if (result.ok) {
      created.push({ index, task: result.task });
    } else {
      failed.push({ index, error: result.error.fieldErrors });
    }
  });

  return { ok: true as const, created, failed };
}