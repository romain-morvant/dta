import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  // Here I can write JS code and functions
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    // Prevent default refresh of the page
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">Tout</option>
          <option value="completed">Fait</option>
          <option value="uncompleted">À faire</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
