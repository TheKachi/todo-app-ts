import React, { useState } from "react";
import AppInput from "./AppInput";
import { Todo } from "./types.ts";
import TodoList from "./TodoList.tsx";

const App: React.FC = () => {
	const [count, setCount] = useState<number>(0);

	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodo = (e: React.FormEvent) => {
		e.preventDefault();
		if (todo) {
			setTodos([{ text: todo, id: Math.random(), isDone: false }, ...todos]);
			setTodo("");
		}
	};

	return (
		<>
			<AppInput todo={todo} setTodo={setTodo} handleAdd={addTodo} />
			<TodoList todos={todos} setTodos={setTodos} />
			<button onClick={() => setCount((count) => count + 1)}>
				count is {count}
			</button>
		</>
	);
};

export default App;
