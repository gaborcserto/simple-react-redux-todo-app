//import React from "react";
import TodoList from "../components/todoList";
import {useTodosStore} from "../stores/todosStore";
import withHooks from "../withHooks";

const MapHooksToProps = props => {
	let {getVisibleTodos, toggleTodo, deleteTodo} = useTodosStore();

	return {
		todos: getVisibleTodos(),
		toggleTodo,
		deleteTodo
	};
};

export default withHooks(MapHooksToProps)(TodoList);
