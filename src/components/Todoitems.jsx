import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const TodoItems = () => {
  const todos = [
    { name: "Buy Milk", dueDate: "2023-10-04" },
    { name: "Go to College", dueDate: "2023-10-04" },
  ];

  return (
    < >
      <div className="bg-[var(--primary-color)] h-screen ">
        <h1 className="text-center font-bold text-4xl sm:text-6xl md:sm:text-8xl mb-10 shadow-lg shadow-white-600 py-6">
          TO-DO App
        </h1>
        <div className="Main-Container grid justify-center sm:px-10 " >
          <div className="Todo-Input m-4 grid gap-3 md:flex  ">
            <input
              type="text"
              name="Additem"
              placeholder="Add new Task"
              className="border-2 border-gray-200 text-sm md:text-xl rounded-xl py-3 pl-5 "
            />
            <div className="grid grid-cols-3 gap-3">
              <input
                type="date"
                name="AddDate"
                id="AddDate"
                className="border-2 border-gray-200 text-md md:text-xl rounded-xl col-span-2 px-5 py-3  "
              />
              <button
                className="bg-green-600 text-white text-md sm:text-xl  rounded-xl cursor-pointer hover:bg-green-700 transition-colors duration-300  "
              >
                Add
              </button>
            </div>
          </div>

          <div className="TodoItems bg-white shadow-md rounded-xl p-4 mt-15 m-4 ">
            {todos.map((todo, index) => (
              <div
                key={index}
                className="todoItem border-b border-gray-200 py-2 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <button
                    className="text-gray-700 text-xl rounded-full cursor-pointer transition-colors duration-300 bg-gray-200 p-2 hover:bg-green-700 hover:text-white "
                  >
                    <FaCheck />
                  </button>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-semibold text-gray-800 text-md sm:text-2xl">{todo.name} </span>
                    <span className="text-xs sm:text-sm text-gray-500 sm:border-l-2 border-gray-200 sm:px-2">
                      {todo.dueDate}
                    </span>
                  </div>
                </div>

                <button
                  className="text-white text-xs sm:text-xl px-3 sm:px-4 py-2 rounded-xl cursor-pointer transition-colors duration-300 bg-red-600 hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

        </div>
      </div >
    </>
  );
};

export default TodoItems;
