import React, {useRef} from "react";

interface NewTodoFormProps {handleClick: (text: string) => void}

export const NewTodoForm = (
  {handleClick}: NewTodoFormProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const onClick = () => {
    if(inputRef.current) {
      handleClick(inputRef.current.value)
    }
  }
  return <div>
    <input
      type="text"
      placeholder="New Todo"
      ref={inputRef}
    />

    <button onClick={onClick}>Add Todo</button>
  </div>
}