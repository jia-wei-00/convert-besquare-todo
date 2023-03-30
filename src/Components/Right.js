import React from "react";

const Right = (props) => {
  const todo = props.details.todoDetails;
  const show = props.details.todoClick;

  console.log(show);

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
              value={todo.text}
              spellcheck="false"
              data-ms-editor="true"
            ></input>
            <label className="mt-4">Description</label>
            <textarea
              rows="10"
              id="update-description"
              className="input-textarea w-100"
              value={todo.description}
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
              value={todo.due_date}
            ></input>
            <div className="py-4 d-flex justify-end">
              <button id="btn-delete-todo" className="btn btn-secondary mr-2">
                Delete
              </button>
              <button id="btn-update-todo" className="btn btn-primary">
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Right;
