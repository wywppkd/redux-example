import { CHANGE_INPUT, ADD_TODO, DEL_TODO } from "./actionTypes";

// 输入事件的action
export const changeInputAction = (value, name) => {
  return {
    type: CHANGE_INPUT,
    value,
    name
  };
};

// 添加事件的action
export const addTodoAction = value => {
  return {
    type: ADD_TODO,
    value
  };
};

// 删除事件的action
export const delTodoAction = index => {
  return {
    type: DEL_TODO,
    index
  };
};
