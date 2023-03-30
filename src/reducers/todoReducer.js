import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  DONE_TODO,
} from "../actions/actionType";

export const initialState = {
  todo_list: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todo_list: [...state.todo_list, action.payload],
      };
    case DONE_TODO:
      const updatedTodoList = state.todo_list.map((todo, index) => {
        if (index === action.payload) {
          return {
            ...todo,
            is_complete: !todo.is_complete,
          };
        }
        return todo;
      });

      return {
        ...state,
        todo_list: updatedTodoList,
      };
    case UPDATE_TODO:
      const tmpUpdate = state.todo_list;
      tmpUpdate.todo_list.splice(action.index, 1, action.payload);

      return {
        todo_list: tmpUpdate,
      };
    case DELETE_TODO:
      const tmpTodo = state.todo_list;
      tmpTodo.splice(action.payload, 1);

      return {
        todo_list: tmpTodo,
      };
    default:
      return state;
  }
};

export default todoReducer;
