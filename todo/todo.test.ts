// todoList.test.ts
import { addItem, markAsCompleted, getItemById, getItems } from "./todo";

describe("TodoList", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("adds a new item to the list", () => {
    addItem("Buy groceries");
    expect(getItems()).toHaveLength(1);
  });

  test("marks an item as completed", () => {
    const newItem = addItem("Read a book");
    markAsCompleted(newItem.id);
    expect(newItem.completed).toBe(true);
  });

  test("retrieves an item by id", () => {
    const newItem = addItem("Do laundry");
    const retrievedItem = getItemById(newItem.id);
    expect(retrievedItem).toEqual(newItem);
  });
});
