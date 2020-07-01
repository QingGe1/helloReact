import React, { Component } from 'react'
import store from '../store/index'
import { add, minus, empty } from "../store/actionCreators";

// export default function ReduxPage() {
//   const [count, setCount] = useState(store.getState());
//   store.subscribe(() => {
//     setCount(store.getState())
//   })
//   const add = () => {
//     store.dispatch({ type: "ADD" });
//   };
//   const minus = () => {
//     store.dispatch({ type: "MINUS" });
//   };

//   return (
//     <div>
//       <h3>ReduxPage</h3>
//       <p>{count.count}</p>
//       <button onClick={add}>add</button>
//       <button onClick={minus}>minus</button>
//     </div>
//   )
// }

export default class ReduxPage extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe((a) => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
  add = () => {
    add();
  };
  minus = () => {
    minus(100);
  };
  empty = () => {
    empty()
  }
  asyAdd = () => {
    store.dispatch((dispatch, getState) => {
      setTimeout(() => {
        dispatch({ type: "ADD", payload: 1 });
      }, 1000);
    });
  }
  render() {
    return (
      <div>
        <h3>ReduxPage</h3>
        <h4>countReducer</h4>
        <p>{store.getState().countReducer.count}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
        <button onClick={this.empty}>empty</button>
        <button onClick={this.asyAdd}>asyAdd</button>
        <h4>firstNamedReducer</h4>
        <p>{store.getState().firstNamedReducer.count}</p>
      </div>
    )
  }
}