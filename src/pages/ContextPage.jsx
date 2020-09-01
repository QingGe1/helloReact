import React from 'react'
import { useContext } from 'react'

const Context = React.createContext('Context defaultValue')
const UserContext = React.createContext('UserContext defaultValue')
UserContext.displayName = 'UserContextDisplayName'

export default function ContextPage() {
  return <>
    <h1>ContextPage</h1>
    <h2>Context.Provider</h2>
    <Context.Provider value={'hello React context'}>
      <ChildFunction />
      <ClassChildren />
    </Context.Provider>
    <h2>context defaultValue</h2>
    <ChildFunction />
    <ClassChildren />
  </>
}

function ChildFunction(props) {
  const context = useContext(Context)
  return <>
    <div>ChildFunction</div>
    <p>useContext: {context}</p>
    <Context.Consumer>
      {context => <p>Context.Consumer: {context}</p>}
    </Context.Consumer>
  </>
}

class ClassChildren extends React.Component {
  static contextType = UserContext;

  render() {
    return <>
      <div>ClassChildren</div>
      <p>this.context: {this.context}</p>
      <Context.Consumer>
        {context => <p>Context.Consumer: {context}</p>}
      </Context.Consumer>
    </>
  }
}