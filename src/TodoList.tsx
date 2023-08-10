import React from "react";
import { Todo } from "./types";
import SingleTodo from "./SingleTodo";

interface Props {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
	return (
		<div>
			{todos.map((todo) => (
				<SingleTodo
					key={todo.id}
					todo={todo}
					setTodos={setTodos}
					todos={todos}
				/>
			))}
		</div>
	);
};

export default TodoList;
