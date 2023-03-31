import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addTodo, updateTodo, deleteTodo, updateDone } from "../actions";

const Right = (props) => {
  const todo = props.details.todoDetails;
  const show = props.details.todoClick;
  const key = props.details.key;

  const [text, setText] = useState(todo.text);
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setText(todo.text);
    setDueDate(todo.due_date);
    setDescription(todo.description);
  }, [props])

  const updateFunc = () => {
    const tmpData = {
      id: todo.id,
      text: todo.text,
      is_complete: todo.is_complete,
      is_deleted: todo.is_deleted,
      due_date: todo.dueDate,
    }
    
    props.deleteTodo(key);
    props.details.setTodoClick(false);
  }

  // id: Date.now(),
  //   text: todoText,
  //     is_complete: false,
  //       is_deleted: false,
  //         due_date: null,
  //           description: "",


  return (
    <div className="app-sidebar-right">
      {show && (
        <div id="edit-todo">
          <div>
            <label>Title</label>
            <input
              type="text"
              id="input-update-todo"
              className="input-field w-100"
              value={text}
              onChange={(e) => setText(e.target.value)}
              spellcheck="false"
              data-ms-editor="true"
            ></input>
            <label className="mt-4">Description</label>
            <textarea
              rows="10"
              id="update-description"
              className="input-textarea w-100"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              spellcheck="false"
              data-ms-editor="true"
            >
              {todo.description}
            </textarea>
            <p className="date-description">
              {new Date(todo.id).toLocaleString()}
            </p>
            <label className="mt-4">Due Date</label>
            <input
              type="date"
              id="update-due-date"
              className="input-field w-100"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            ></input>
            <div className="py-4 d-flex justify-end">
              <button id="btn-delete-todo" className="btn btn-secondary mr-2" onClick={updateFunc}>
                Delete
              </button>
              <button id="btn-update-todo" className="btn btn-primary" onClick={() => updateTodo(props.details.key, props.details.todoDetails)}>
                Update
              </button>
            </div>
          </div>
        </div>
      )}
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

export default connect(mapStateToProps, mapDisaptchToProps)(Right);
