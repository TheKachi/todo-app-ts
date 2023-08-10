import React, { useState, useRef, useEffect } from "react";
import { Todo } from "./types";

type Props = {
	todo: Todo;
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
	const [isEditing, setIsEditing] = useState<boolean>(false);
	const [todoText, setTodoText] = useState<string>(todo.text);

	const handleDone = (id: number) => {
		const updatedTodos = todos.map((todo) =>
			todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
		);
		setTodos(updatedTodos);
	};

	const handleDelete = (id: number) => {
		const updatedTodos = todos.filter((todo) => todo.id !== id);
		setTodos(updatedTodos);
	};

	const handleEdit = (e: React.FormEvent, id: number) => {
		e.preventDefault();
		const updatedTodos = todos.map((todo) =>
			todo.id === id ? { ...todo, text: todoText } : todo
		);
		setTodos(updatedTodos);
		setIsEditing(false);
	};

	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		inputRef.current?.focus();
	}, [isEditing]);

	return (
		<div>
			{/* Tick off  */}
			<input
				type="checkbox"
				checked={todo.isDone}
				onChange={() => handleDone(todo.id)}
			/>

			{/* Edit, Delete, Save Edit  */}
			<span>
				{!isEditing ? (
					<>
						<span onClick={() => setIsEditing(true)}>
							{todo.isDone ? (
								<s>{todo.text}</s>
							) : (
								<span>{todo.text}</span>
							)}
						</span>
						<button onClick={() => setIsEditing(true)}>Edit</button>
						<button onClick={() => handleDelete(todo.id)}>delete</button>
					</>
				) : (
					<>
						<input
							ref={inputRef}
							type="text"
							value={todoText}
							onChange={(e) => setTodoText(e.target.value)}
						/>
						<button onClick={(e) => handleEdit(e, todo.id)}>Save</button>
					</>
				)}
			</span>
		</div>
	);
};

export default SingleTodo;
