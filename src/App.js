import React, { Component } from "react";
import store from "./store/index";
import {
  changeInputAction,
  addTodoAction,
  delTodoAction
} from "./store/actionCreators";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();

    this.inputChange = this.inputChange.bind(this);
    // this.delTodo = this.delTodo.bind(this); 这个事件要传参所以只能在DOM中使用bind或者用箭头函数
    this.addTodo = this.addTodo.bind(this);
    this.storeChange = this.storeChange.bind(this);

    store.subscribe(this.storeChange);
  }

  // 输入事件
  inputChange(e) {
    const value = e.target.value;
    console.log("TCL: App -> inputChange -> value", value);
    store.dispatch(changeInputAction(value));
  }

  // 添加事件
  addTodo() {
    store.dispatch(addTodoAction(this.state.inputValue));
    console.log(
      "TCL: App -> addTodo -> this.state.inputValue",
      this.state.inputValue
    );
  }

  // 添加事件
  delTodo(index) {
    store.dispatch(delTodoAction(index));
  }

  // store改变事件
  storeChange() {
    this.setState(store.getState());
  }

  render() {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.inputChange} />
        <button onClick={this.addTodo}>添加</button>
        {this.state.list.map((item, index) => {
          return (
            <li key={index} onClick={this.delTodo.bind(this, index)}>
              {item}
            </li>
          );
        })}
      </div>
    );
  }
}

export default App;
