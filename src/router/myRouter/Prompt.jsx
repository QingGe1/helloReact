import React from 'react'
import PropTypes from "prop-types";
import { RouterContext } from './Context'

import Lifecycle from './Lifecycle'

export default function Prompt({ message, when = true }) {
  return (
    <RouterContext.Consumer>
      {context => {
        if (!when) return null;
        const method = context.history.block;
        return (
          <Lifecycle
            onMount={self => {
              self.release = method(message);
            }}
            onUpdate={(self, prevProps) => {
              if (prevProps.message !== message) {
                self.release();
                self.release = method(message);
              }
            }}
            onUnmount={self => {
              self.release();
            }}
            message={message}
          />
        );
      }}
    </RouterContext.Consumer>
  )
}

Prompt.propTypes = {
  when: PropTypes.bool,
  message: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired
};