import { CHANGE_INPUT, ADD_TODO, DEL_TODO } from "./actionTypes";
const initalState = {
  inputValue: "",
  list: [1, 2, 3]
};
export default function(state = initalState, action) {
  const type = action.type;
  let newState = state;
  switch (type) {
    // 输入事件
    case CHANGE_INPUT:
      newState.inputValue = action.value;
      return newState;
    // 添加事件
    case ADD_TODO:
      newState.list.push(action.value);
      return newState;
    // 删除事件
    case DEL_TODO:
      newState.list.splice(action.index, 1);
      return newState;
    default:
      return state;
  }
}
