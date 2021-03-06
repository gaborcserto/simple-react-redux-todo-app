import createStore from "./createStore";
import produce from "immer";
//import { v4 } from "uuid"

let nextTodoId = 0;

let [TodosStoreProvider, useTodosStore] = createStore(
	({state, setState}) => {
		const addTodo = text => {
			setState(
				produce(draft => {
					draft.todos.push({
						id: nextTodoId++,
						text,
						completed: false
					});
				})
			);
		};

		const toggleTodo = id => {
			setState(
				produce(draft => {
					draft.todos.forEach(todo => {
						if (todo.id === id) {
							todo.completed = !todo.completed;
						}
					});
				})
			);
		};

		/*const updateTodo = (index, value) => {
			setState(
				produce(draft => {
					draft[index] = value;
					return draft;
				})
			);
		}*/

		const deleteTodo = index => {
			setState(
				produce(draft => {
					draft.todos.splice(index, 1);
					return draft;
				})
			);
		};

		const setFilter = filter => {
			setState(
				produce(draft => {
					draft.filter = filter;
				})
			);
		};

		const getFilter = () => {
			return state.filter;
		};

		const getVisibleTodos = () => {
			return filterTodos(state.todos, getFilter());
		};

		return {
			addTodo,
			toggleTodo,
			deleteTodo,
			setFilter,
			getFilter,
			getVisibleTodos
		};
	},
	{
		todos: [],
		filter: "SHOW_ALL"
	}
);

function filterTodos(todos, filter) {
	switch (filter) {
		case "SHOW_ALL":
			return todos;
		case "SHOW_COMPLETED":
			return todos.filter(t => t.completed);
		case "SHOW_ACTIVE":
			return todos.filter(t => !t.completed);
		default:
			throw new Error("Unknown filter: " + filter);
	}
}

export {TodosStoreProvider, useTodosStore};
