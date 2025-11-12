import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { IoCalendarNumber } from "react-icons/io5";

const TodoItems = () => {

  const [addTodo, setTodo] = useState("");
  const [addDate, setDate] = useState("");
  const [emptyTaskError, setEmptyTaskError] = useState(false)
  const [emptyDateError, setEmptyDateError] = useState(false)



  const currentDate = new Date().toISOString().split("T")[0];

  const [todos, setTodos] = useState([
    { name: "Add new Task", dueDate: currentDate },
  ])

  const handleAddTodo = (e) => {
    setTodo(e.target.value)
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const addBtn = () => {
    if (addTodo === "") {
      setEmptyTaskError(true)
      return

    } else if (addDate === "") {
      setEmptyDateError(true)
      return
    }

    const newTodo = { name: addTodo, dueDate: addDate, completed: false };

    setTodos((prevTodos) => {
      if (prevTodos.length === 1 && prevTodos[0].name === "Add new Task") {
        return [newTodo];
      }
      return [newTodo, ...prevTodos];
    });

    setTodo("");
    setDate("")
    setEmptyTaskError(false);
    setEmptyDateError(false);
  };
  const handleDeleteBtn = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
    console.log(index);

  }
  const handleTaskComp = (index) => {
    setTodos((prev) => {
      const updatedTodos = prev.map((todo, i) =>
        i === index
          ? { ...todo, completed: true }
          : todo
      );

      const incomplete = updatedTodos.filter((todo) => !todo.completed);
      const complete = updatedTodos.filter((todo) => todo.completed);

      return [...incomplete, ...complete];
    });
  };

  return (
    < >
      <div className="bg-[var(--primary-color)] h-screen  ">
        <h1 className="text-center font-bold text-4xl sm:text-6xl md:sm:text-8xl mb-10 shadow-lg shadow-white-600 py-6">
          TO-DO App
        </h1>
        <div className="Main-Container   " >
          <div className="Todo-Input  gap-3 flex  justify-center items-center sm:items-start flex-col sm:flex-row m-4 ">
            <div className="">
              <input
                type="text"
                name="Additem"
                value={addTodo}
                onChange={handleAddTodo}
                placeholder="Add new Task"
                className="border-2  border-gray-200 text-sm md:text-xl rounded-xl py-3 pl-6 max-w-100"
              />
              {emptyTaskError && (
                <p className="text-red-600 text-sm mt-1 ">Please add a new task</p>
              )}
            </div>

            <div className="flex gap-3">
              <div className="inputDate relative w-full max-w-xs flex items-center ">
                <input
                  type="date"
                  name="AddDate"
                  id="AddDate"
                  value={addDate}
                  onChange={handleDateChange}
                  className="border-2 border-gray-200 text-sm md:text-md md:text-xl rounded-xl pl-2   md:px-5 py-3"
                />
                <IoCalendarNumber className="absolute sm:hidden right-4 text-2xl text-gray-400 pointer-events-none" />
                {emptyDateError && (
                  <p className="text-red-600 text-sm mt-1">Please select a date</p>
                )}
              </div>

              <div className="addBtn  ">
                <button
                  onClick={addBtn}
                  className="bg-green-600 text-white text-sm sm:text-xl rounded-xl px-6 py-3 active:bg-green-700 transition-colors duration-300"
                >
                  Add
                </button>
              </div>
            </div>
          </div>


          <div className="TodoItems bg-white shadow-md rounded-xl p-4 mt-15 m-2 sm:m-6 md:m-10 ">
            {todos.map((todo, index) => (
              <div
                key={index}
                className="todoItem relative border-b border-gray-200 py-2 flex items-center justify-between"
              >
                {todo.completed && (
                  <div className="absolute top-1/2 left-0 w-full border-t-2 border-gray-400"></div>
                )}

                <div className={`flex items-center gap-3`}>
                  <button
                    onClick={() => handleTaskComp(index)}
                    className={`text-xl rounded-full cursor-pointer transition-colors duration-300 p-2 ${todo.completed
                      ? "bg-gray-200 text-gray-400"
                      : "bg-gray-200 text-gray-700 active:bg-green-700 active:text-white"
                      }`}
                  >
                    <FaCheck />
                  </button>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span
                      className={`text-md sm:text-2xl ${todo.completed
                        ? "text-gray-400 line-through font-light"
                        : "text-gray-800 font-semibold"
                        }`}
                    >
                      {todo.name}
                    </span>
                    <span
                      className={`text-xs sm:text-sm sm:border-l-2 sm:px-2 ${todo.completed ? "text-gray-300 border-gray-200" : "text-gray-400 border-black"
                        }`}
                    >
                      {todo.dueDate}
                    </span>
                  </div>
                </div>

                <button
                  className={`text-xl p-1 md:text-3xl md:p-1 rounded-xl cursor-pointer transition-colors duration-300 ${todo.completed ? "text-gray-400 bg-gray-200" : "text-white bg-red-600 active:bg-red-700"
                    }`}
                  onClick={() => handleDeleteBtn(index)}
                >
                  <MdDeleteForever />
                </button>
              </div>
            ))}

          </div>

        </div>
        <footer className="absolute w-full bottom-0 text-center py-5" >Coded <span className="text-red-300 cursor-pointer active:text-red-600 hover:text-red-600 transition duration-600"> Abdullah Saafi</span></footer>
      </div >
    </>
  );
};

export default TodoItems;
