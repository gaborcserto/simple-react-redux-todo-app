import React from "react";
import { useTodosStore } from "../stores/todosStore";
import withHooks from "../withHooks";
import { Input, Button } from '@material-ui/core';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';

const AddTodo = props => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          props.addTodo(input.value);
          input.value = "";
        }}
      >
        <Input fullWidth inputRef={node => (input = node)}/>
        <Button
            className="btn-todo"
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            endIcon={<AddCircleOutlinedIcon />}
        >
            Add Todo
        </Button>
      </form>
    </div>
  );
};

const MapHooksToProps = props => {
  let { addTodo } = useTodosStore();

  return {
    addTodo
  };
};

export default withHooks(MapHooksToProps)(AddTodo);
