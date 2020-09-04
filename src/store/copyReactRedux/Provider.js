import React from './node_modules/react';
import Context from './context'

export default function Provider({ children, store }) {
  return <Context.Provider value={store}>
    {children}
  </Context.Provider>
}