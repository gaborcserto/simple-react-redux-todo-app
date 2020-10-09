import React from 'react'
import PropTypes from 'prop-types'
import { ListItem, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const todoListItem = ({clicked, completed, text, deleted}) => (
	<ListItem button className={completed ? 'completed' : null}>
		<span className="icon" aria-hidden="true">
			{completed ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankIcon />}
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