import React, { useEffect, useState } from "react";

const todoListOriginal = [
  { id: 1, todolist: "finish props practice in srimba" },
  { id: 2, todolist: "code review lender matching" },
  { id: 3, todolist: "redux for one hour" },
];

function Todo() {

  localStorage.setItem('todoListOriginal', JSON.stringify(todoListOriginal));
  const [todo, setTodo] = useState(todoListOriginal);


  const [addTodo, setAddTodo] = useState(null);

  const handleDelete = (e) => {
    const id = parseInt(e.target.getAttribute("name"));
    console.log(id);
    const newList = todo.filter((item) => {
      console.log(item.id, id);
      return item.id !== id;
    });
    setTodo(newList);
  };

  const handleAdd = (event) => {
    console.log(event);
    setAddTodo(` ${event.target.value}`);
  };

  const handleAddButton = (event) => {
    setTodo((prev) => [
      ...prev,
      { id: parseInt(`${todo.length + 1}`), todolist: addTodo },
    ]);
  };

  useEffect(() => {
    window.localStorage.setItem("todo", JSON.stringify(todo));
    console.log(JSON.stringify(todo));
  }, [todo]);

  return (
    <div>
      <h4>Here is my todo list</h4>
      <ul>
        {todo.map((item) => {
          return (
            <div className="flex flex-row gap-7 m-px justify-between">
              <p className="" name={item.id}>
                {item.id}: {item.todolist}
              </p>
              <button
                onClick={handleDelete}
                name={item.id}
                className="bg-fuchsia-500 hover:bg-red-600 text-white py-0 px-2 rounded"
              >
                done
              </button>
            </div>
          );
        })}
      </ul>
      <div className="flex justify-center gap-6" >
        <input
          className="form-control
        block
        w-half
        px-2
        py-0
        text-base
        bg-white bg-clip-padding
        border border-solid border-purple-300
        rounded
        transition
        ease-in-out
        m-0
       focus:outline-none"
          onChange={handleAdd}
          placeholder="enter to do list here"
        />
        {/* <p>{addTodo}</p> */}
        <button
          className="bg-emerald-400 hover:bg-teal-500 text-white py-0 px-2 rounded"
          onClick={handleAddButton}
        >
          add list
        </button>
      </div>
    </div>
  );
}

export default Todo;
