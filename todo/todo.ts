// todoList.ts
export type TodoItem = {
  id: number;
  title: string;
  completed: boolean;
};

let idCounter = 0;
const todoItems: TodoItem[] = [];

export function addItem(title: string): TodoItem {
  const newItem: TodoItem = { id: idCounter++, title, completed: false };
  todoItems.push(newItem);
  return newItem;
}

export function markAsCompleted(id: number): void {
  const item = todoItems.find((item) => item.id === id);
  if (item) {
    item.completed = true;
  }
}

export function getItemById(id: number): TodoItem | undefined {
  return todoItems.find((item) => item.id === id);
}

export function getItems(): TodoItem[] {
  return todoItems;
}
