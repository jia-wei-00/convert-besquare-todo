import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { addTodo, updateTodo, deleteTodo, updateDone } from "../actions";

const Middle = (props) => {
  const [todoText, setTodoText] = useState("");
  console.log(props.todo_list);

  const ulRef = useRef(null);

  const handleToggle = (key) => {
    const query_expand = ulRef.current;
    const div = query_expand.querySelector(`#id${key}`);
    const expand_btn = div.querySelector(".expand-todo");
    const expand_desc = div.querySelector(".todo-description");
    if (expand_desc.classList.contains("show")) {
      expand_desc.classList.remove("show");
      expand_btn.innerHTML = `<i class="fa-solid fa-chevron-down"></i>`;
    } else {
      expand_desc.classList.add("show");
      expand_btn.innerHTML = `<i class="fa-solid fa-chevron-up"></i>`;
    }
  };

  const addTodo = (e) => {
    e.preventDefault();

    const todoInput = todoText.trim();

    const todo_item = {
      id: Date.now(),
      text: todoText,
      is_complete: false,
      is_deleted: false,
      due_date: null,
      description: "",
    };

    if (todoInput) {
      props.addTodo(todo_item);
      setTodoText("");
    }
  };

  const onSelect = (todo, key) => {
    props.setDetails.setTodoClick(true);
    props.setDetails.setTodoDetails(todo);
    props.setDetails.setKey(key);
  };

  return (
    <div className="app-content">
      <div className="d-flex justify-content-between">
        <h2>Today</h2>
        <div className="date-field">
          <input type="date" id="date-input" className="input-field" />
          <button id="set-date" className="btn btn-primary" hidden>
            Set
          </button>
        </div>
      </div>
      <div>
        <form id="todo-form" onSubmit={addTodo}>
          <input
            type="text"
            id="todo-input"
            className="input-field input-field-todo"
            placeholder="Add new todo"
            onChange={(e) => setTodoText(e.target.value)}
            value={todoText}
          />
          <button
            type="submit"
            id="add-todo"
            className="btn btn-primary"
            hidden
          >
            Add
          </button>
        </form>
      </div>
      <div className="d-flex justify-end">
        <span className="mr-2">
          <i className="fa-solid fa-border-all"></i>
        </span>
        <span>
          <i className="fa-solid fa-list-check"></i>
        </span>
      </div>
      <div>
        <ul ref={ulRef} id="todo-list">
          {props.todo_list.map((todo, key) => {
            return (
              <li key={key}>
                <div className="todo-item" id={`id${key}`}>
                  <input
                    type="checkbox"
                    className="input-checkbox"
                    id="todo-check"
                    onChange={() => props.updateDone(key)}
                    checked={todo.is_complete}
                  />
                  <div className="todo-text" onClick={() => onSelect(todo, key)}>
                    <p>{todo.text}</p>
                    {todo.due_date && (
                      <div id="todo-due-date">
                        <span className="due-date">
                          <i className="fa-solid fa-calendar-days mr-2"></i>
                          <span>
                            {new Date(todo.due_date)
                              .toISOString()
                              .substring(0, 10)}
                          </span>
                        </span>
                      </div>
                    )}

                    <div className="todo-description">{todo.description}</div>
                  </div>
                  {todo.description && (
                    <button
                      className="expand-todo"
                      onClick={() => handleToggle(key)}
                    >
                      <i className="fa-solid fa-chevron-down"></i>
                    </button>
                  )}
                  <button
                    className="delete-todo"
                    onClick={() => props.deleteTodo(key)}
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todo_list: state.todoState.todo_list,
  };
};

const mapDisaptchToProps = (dispatch) => ({
  addTodo: (props) => dispatch(addTodo(props)),
  updateTodo: (index, props) => dispatch(updateTodo(index, props)),
  updateDone: (props) => dispatch(updateDone(props)),
  deleteTodo: (props) => dispatch(deleteTodo(props)),
});

export default connect(mapStateToProps, mapDisaptchToProps)(Middle);
