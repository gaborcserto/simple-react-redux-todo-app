import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';

const todoButton = ({active, children, onClick, ...props}) => (
	<Button
		{...props}
		onClick={onClick}
		disabled={active}
	>
		{children}
	</Button>
)

todoButton.propTypes = {
	active: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired
}

export default todoButton