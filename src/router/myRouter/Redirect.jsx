import React, { Component } from 'react'
import PropTypes from "prop-types";
import { RouterContext } from './Context'
import Lifecycle from './Lifecycle'

export default class Redirect extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          const { to, push } = this.props
          const { history } = context
          return < Lifecycle onMount={() => { push ? history.push(to) : history.replace(to) }} />
        }
        }
      </RouterContext.Consumer >
    )
  }
}

Redirect.defaultProps = {
  push: false
};

Redirect.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  push: PropTypes.bool,
};
