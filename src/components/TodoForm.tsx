import { useState, type FormEvent } from "react";

type FormProps = {
  addTodo: (tarea: string) => void;
};

const Form = ({ addTodo }: FormProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [alerta, setAlerta] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue === "") {
      setAlerta("No puede estar el campo vacio");
      return;
    }
    setAlerta("");
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-5">
      {alerta !== "" && (
        <div className="bg-red-500 text-white p-3 rounded text-center uppercase text-sm font-bold">
          {alerta}
        </div>
      )}
      <div className="flex justify-between items-center">
        <input
          className=" p-3 border rounded-lg w-full "
          placeholder="Que necesitas hacer?"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="">
          <button className="bg-blue-500 text-white rounded-md w-40 ml-3 py-2">
            + Añadir
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
