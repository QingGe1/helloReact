import React, { Component } from 'react'
// import store from '../store/index'
// import { add, minus, empty } from "../store/actionCreators";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// https://www.redux.org.cn/docs/react-redux/api.html#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
@connect(
  // mapStateToProps [mapStateToProps(state, [ownProps]): stateProps] (Function)
  state => state,
  // mapDispatchToProps [mapDispatchToProps(dispatch, [ownProps]): dispatchProps] (Object or Function)

  // Object
  // { add, minus, empty }

  // Function
  dispatch => {
    let creators = {
      add: () => dispatch({ type: "ADD" }),
      minus: value => dispatch({ type: "MINUS", payload: value }),
      empty: () => dispatch({ type: "EMPTY" })
    }
    creators = bindActionCreators(creators, dispatch)
    return { dispatch, ...creators }
  }
)
class ReduxPage extends Component {
  componentDidMount() {
    // this.unsubscribe = store.subscribe((a) => {
    //   this.forceUpdate();
    // });
  }

  componentWillUnmount() {
    // if (this.unsubscribe) {
    //   this.unsubscribe();
    // }
  }

  add = () => {
    this.props.add();
  };
  minus = () => {
    this.props.minus(100);
  };
  empty = () => {
    this.props.empty()
  }
  asyAdd = () => {
    // store.dispatch((dispatch, getState) => {
    //   setTimeout(() => {
    //     dispatch({ type: "ADD", payload: 1 });
    //   }, 1000);
    // });
  }
  render() {
    const { props } = this
    return (
      <div className='contanier'>
        <h3>ReduxPage</h3>
        <h4>countReducer</h4>
        <div>{props.countReducer.count}</div>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
        <button onClick={this.empty}>empty</button>
        <button onClick={this.asyAdd}>asyAdd</button>
        <h4>firstNamedReducer</h4>
        <div>{props.firstNamedReducer.count}</div>
        {/* <Child prop={'prop'}></Child> */}
      </div>
    )
  }
}
export default ReduxPage

@connect(state => state)
class Child extends Component {
  render() {
    console.log(this.props);
    return <div>
      <h4>Child</h4>
      <div>{this.props.countReducer.count}</div>
      <div>{this.props.prop}</div>
    </div>
  }
}


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

