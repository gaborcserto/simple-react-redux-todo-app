import React from "react";
import { useTodosStore } from "../stores/todosStore";
import withHooks from "../withHooks";
import { Input, Button } from '@material-ui/core';

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
        <Input inputRef={node => (input = node)}/>
        <Button type="submit" color="primary">Add Todo</Button>
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
