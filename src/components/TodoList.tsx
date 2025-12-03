import type { Todo } from "../types";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: Todo["id"]) => void;
  onDelete: (id: Todo["id"]) => void;
};

const TodoList = ({ todos, onToggle, onDelete }: TodoListProps) => {
  return (
    <div className="space-y-8">
      {todos.length < 0 ? (
        <p> No tienes ninguna tarea</p>
      ) : (
        <div className="space-y-4">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default TodoList;
