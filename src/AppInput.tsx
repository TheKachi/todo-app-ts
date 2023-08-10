import React, { useRef } from "react";

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAdd: (e: React.FormEvent) => void;
}

const AppInput = ({ todo, setTodo, handleAdd }: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);
	return (
		<form
			onSubmit={(e) => {
				handleAdd(e);
				inputRef.current?.blur();
			}}
		>
			<input
				ref={inputRef}
				type="text"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button type="submit">Add Todo</button>
		</form>
	);
};

export default AppInput;
