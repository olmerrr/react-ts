import React from "react";

interface NewTodoFormProps {
  value: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  handleClick: () => void
}

export const NewTodoForm = (
  {
    value,
    onChange,
    handleClick
  }: NewTodoFormProps) => {
  return <div>
    <input
      type="text"
      placeholder="New Todo"
      value={value}
      onChange={onChange}
    />
    <button onClick={ handleClick}>Add Todo</button>
  </div>
}