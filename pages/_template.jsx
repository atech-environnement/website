import React from 'react'
import { prefixLink } from 'gatsby-helpers'

import 'es6-promise';
import 'whatwg-fetch';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  },
})
