import { defineStore } from "pinia";

export const FILTER_OPTIONS = ["all", "finished", "unfinished"] as const;

export type ITodoFilter = typeof FILTER_OPTIONS[number];

export function isTodoFilter(value: string): value is ITodoFilter {
  return FILTER_OPTIONS.includes(value as ITodoFilter);
}

export type ITodoItem = {
  text: string;
  id: number;
  isFinished: boolean;
};

export const useTodosStore = defineStore("todos", {
  state: () => ({
    todos: [] as ITodoItem[],
    filter: "all" as ITodoFilter,
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      return state.todos.filter((todo) => todo.isFinished);
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished);
    },
    filteredTodos(): ITodoItem[] {
      if (this.filter === "finished") {
        return this.finishedTodos;
      } else if (this.filter === "unfinished") {
        return this.unfinishedTodos;
      }
      return this.todos;
    },
  },
  actions: {
    addTodo(text: string) {
      this.todos.push({ text, id: this.nextId++, isFinished: false });
    },
    setFilter(filter: ITodoFilter) {
      this.filter = filter;
    },
    toggleItemStatus(id: number) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) todo.isFinished = !todo.isFinished;
    },
  },
});
