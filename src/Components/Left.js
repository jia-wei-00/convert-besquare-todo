import React, { useState } from "react";
import { connect } from "react-redux";

const Left = (props) => {
  const [searchArr, setSearchArr] = useState([]);

  const searchFunc = (value) => {
    if (value.trim()) {
      setSearchArr(props.todo_list.filter((todo) => todo.text.includes(value)));
    } else {
      setSearchArr([]);
    }

    console.log(searchArr);
  };

  return (
    <div className="app-sidebar-left">
      <div className="app-title">
        <span>Todo</span>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="d-flex">
        <form id="search-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            id="search-input"
            className="input-field"
            placeholder="Search"
            onChange={(e) => searchFunc(e.target.value)}
          />
          <button id="search" className="btn btn-primary" hidden></button>
        </form>
      </div>
      <div>
        <div id="result-count">
          {searchArr.length !== 0 &&
            `Showing: ${searchArr.length} result${
              searchArr.length > 1 ? "s" : ""
            }`}
        </div>
        <ul id="search-list">
          {searchArr.length > 0 ? (
            searchArr.map((result, key) => {
              const date = new Date(result.id);
              const date_str = `${date.getDate()}/${
                date.getMonth() + 1
              }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
              return (
                <li key={key}>
                  <div class="d-flex justify-content-between">
                    {result.text}
                    <span class="search-date-time">{date_str}</span>
                  </div>
                </li>
              );
            })
          ) : (
            <li className="no-data">
              <i>type keyword and click search</i>
            </li>
          )}
        </ul>
      </div>
      <div className="app-tasks">
        <div className="app-tasks-title">TASKS</div>
        <ul className="app-tasks-types">
          <li>
            <span>
              <i className="fa-solid fa-chevron-right"></i>
            </span>
            Upcoming
          </li>
          <li>
            <span>
              <i className="fa-solid fa-list-check"></i>
            </span>
            Today
          </li>
          <li>
            <span>
              <i className="fa-solid fa-calendar-days"></i>
            </span>
            This Week
          </li>
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

export default connect(mapStateToProps)(Left);
