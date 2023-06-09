import {useRef} from 'react'

interface NewItemProps {
  placeholder: string
  handleClick: (text: string) => void,
}

export const NewItem = ({placeholder,  handleClick }: NewItemProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClick = () => {
    if (inputRef.current) {
      handleClick(inputRef.current.value)
      inputRef.current.value = '';
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        ref={inputRef}
      />
      <button className="btn ml-1" onClick={onClick}>Add todo</button>
    </>
  );
};

