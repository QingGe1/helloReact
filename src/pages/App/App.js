import React from 'react';
import './App.css';
import RouterPage from '../RouterPage';

function App(props) {
  return <RouterPage />;
}
export default App;



// eslint-disable-next-line no-unused-vars
function WithLogin(WrappedComponent, callback) {
  // @connect(
  //   ({ auth }) => ({ auth }),
  //   dispatch => {
  //     console.log('dispatch', dispatch);
  //   }
  // )
  class LoginButton extends React.Component {
    clickHandle = () => {
      console.log(this.props.auth);
    }
    render() {
      return <WrappedComponent {...this.props} onClikc={this.clickHandle} />;
    }

  }
  return LoginButton
}
