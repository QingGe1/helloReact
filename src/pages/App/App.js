import React from 'react';
// import logo from './logo.svg';
// import { Link, NavLink, Prompt  } from 'react-router-dom'
import './App.css';
// import AntdForm from './pages/AntdForm';
// import RCFormPage from './pages/RCFormPage';
// import HOCFormPage from './pages/HOCFormPage';
// import DialogPage from './pages/DialogPage';
// import ReduxPage from './pages/ReduxPage';
// import ReactReduxHookPage from './pages/ReactReduxHookPage';
import RouterPage from '../RouterPage';

const MyContainer = (WrappedComponent) =>
  class extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
const TC = function () {
  return <div>111</div>
}
const Btn = MyContainer(TC)



function App(props) {

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <RouterPage></RouterPage>
      <Btn></Btn>
      {/* <AntdForm></AntdForm> */}
      {/* <RCFormPage></RCFormPage> */}
      {/* <HOCFormPage name='123'></HOCFormPage> */}
      {/* <DialogPage></DialogPage> */}
      {/* <ReduxPage></ReduxPage> */}
      {/* <ReactReduxHookPage></ReactReduxHookPage> */}
    </div>
  );
}
export default App;



function WithLogin(WrappedComponent, callback) {
  // @connect(
  //   ({ auth }) => ({ auth }),
  //   dispatch => {
  //     console.log('dispatch', dispatch);
  //   }
  // )
  class LoginButton extends React.Component {
    constructor(props) {
      super(props)
    }

    clickHandle = () => {
      console.log(this.props.auth);
    }

    render() {
      return <WrappedComponent {...this.props} onClikc={this.clickHandle} />;
    }

  }
  return LoginButton
}
