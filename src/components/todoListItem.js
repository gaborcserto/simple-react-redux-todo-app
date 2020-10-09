import React from 'react'
import PropTypes from 'prop-types'
import { ListItem, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const todoListItem = ({clicked, completed, text, deleted}) => (
	<ListItem>
		<span className="icon" aria-hidden="true">
			{completed ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
		</span>
		<ListItemText
			onClick={clicked}
			style={{
				textDecoration: completed ? 'line-through' : 'none'
			}}>
			{text}
		</ListItemText>
		<span
			aria-label="delete"
			onClick={deleted}
			className="delete">
			<DeleteIcon />
		</span>

	</ListItem>
)

todoListItem.propTypes = {
	clicked: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired,
	deleted: PropTypes.func.isRequired
}

export default todoListItem