import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import AntdForm from './pages/AntdForm';
// import RCFormPage from './pages/RCFormPage';
// import HOCFormPage from './pages/HOCFormPage';
// import DialogPage from './pages/DialogPage';
import ReduxPage from './pages/ReduxPage';
import ReactReduxHookPage from './pages/ReactReduxHookPage';

function App() {
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
      {/* <AntdForm></AntdForm> */}
      {/* <RCFormPage></RCFormPage> */}
      {/* <HOCFormPage name='123'></HOCFormPage> */}
      {/* <DialogPage></DialogPage> */}
      <ReduxPage></ReduxPage>
      <ReactReduxHookPage></ReactReduxHookPage>
    </div>
  );
}

// class App extends React.Component{
//   func() {
//     console.log(this)
//   }
//   funb = () => {
//     console.log(this);
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.func.bind(this)}>1</button>
//       </div>
//     )
//   }
// }

export default App;
