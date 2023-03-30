import React from "react";

const Left = () => {
  return (
    <div className="app-sidebar-left">
      <div className="app-title">
        <span>Todo</span>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="d-flex">
        <form id="search-form">
          <input
            type="text"
            id="search-input"
            className="input-field"
            placeholder="Search"
          />
          <button id="search" className="btn btn-primary" hidden></button>
        </form>
      </div>
      <div>
        <div id="result-count"></div>
        <ul id="search-list">
          <li className="no-data">
            <i>type keyword and click search</i>
          </li>
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

export default Left;
