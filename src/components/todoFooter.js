import React from "react";
import FilterLink from "../containers/filterLink";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {Typography} from '@material-ui/core';

const Adapt = ({children, ...other}) => children(other);

const todoFooter = () => (
	<div>
		<Typography variant="body2" display="inline" component="span">Show: </Typography>
		<ButtonGroup color="primary" aria-label="outlined primary button group">
			<Adapt>
				{({className, ...props}) => (
					<FilterLink className={className} {...props} filter={"SHOW_ALL"}>All</FilterLink>
				)}
			</Adapt>
			<Adapt>
				{({className, ...props}) => (
					<FilterLink className={className} {...props} filter={"SHOW_ACTIVE"}>Active</FilterLink>
				)}
			</Adapt>
			<Adapt>
				{({className, ...props}) => (
					<FilterLink className={className} {...props} filter={"SHOW_COMPLETED"}>Completed</FilterLink>
				)}
			</Adapt>
		</ButtonGroup>
	</div>
);

export default todoFooter;