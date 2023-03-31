import { ADD_TODO, UPDATE_TODO, DELETE_TODO, DONE_TODO } from "./actionType";

export const addTodo = (props) => {
  return {
    type: ADD_TODO,
    payload: props,
  };
};

export const updateTodo = (index, props) => {
  return {
    type: UPDATE_TODO,
    index: index,
    payload: props,
  };
};

export const updateDone = (props) => {
  return {
    type: DONE_TODO,
    payload: props,
  };
};

export const deleteTodo = (props) => {
  return {
    type: DELETE_TODO,
    payload: props,
  };
};