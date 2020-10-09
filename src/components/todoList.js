import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './todoListItem'
import {List, Divider} from '@material-ui/core'

const todoList = ({todos, toggleTodo, deleteTodo}) => (
	<List className="list-group">
		{todos.map((todo, index) =>
			<React.Fragment key={index}>
				<TodoItem
					key={todo.id}
					{...todo}
					clicked={() => toggleTodo(todo.id)}
					deleted={() => deleteTodo(index)}
				/>
				<Divider/>
			</React.Fragment>
		)}
	</List>
)

todoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired).isRequired,
	toggleTodo: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired
}

export default todoList