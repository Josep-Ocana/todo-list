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
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-white shadow-lg  rounded-lg p-5 text-gray-700 gap sm:gap-0">
      <p className="flex justify-between sm:block sm:flex-grow sm:text-center ">
        <span className="">Total:</span>
        <span className="">{total}</span>
      </p>

      <p className="flex justify-between sm:block sm:flex-grow sm:text-center">
        <span>Completadas: </span>
        <span>{completed}</span>
      </p>

      <p className="flex justify-between sm:block sm:flex-grow sm:text-center">
        <span className="">Pendientes: </span>
        <span className="">{pending}</span>
      </p>
    </div>
  );
};

export default Stats;
