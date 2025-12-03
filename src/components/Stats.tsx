import type { Todo } from "../types";

type StatsProps = {
  todos: Todo[];
};

const Stats = ({ todos }: StatsProps) => {
  const { total, completed, pending } = todos.reduce(
    (acc, todo) => {
      acc.total += 1;
      if (todo.completed) acc.completed += 1;
      else acc.pending += 1;
      return acc;
    },
    { total: 0, completed: 0, pending: 0 }
  );

  return (
    <div className="flex justify-between bg-white shadow-lg rounded-lg p-5 text-gray-700">
      <p>Total: {total}</p>
      <p>Completadas: {completed}</p>
      <p>Pendientes: {pending}</p>
    </div>
  );
};

export default Stats;
