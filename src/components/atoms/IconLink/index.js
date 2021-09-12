/* @flow */
import * as React from 'react'
import PropTypes from 'prop-types'

import Anchor from '../Anchor'
import classnames from 'classnames'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const IconLink = (props) => (
  <Anchor className={classnames(props.anchor, props.className)} href={props.href}> <FontAwesomeIcon icon={ props.icon} size="2x"/></Anchor>
)

IconLink.propTypes = {
  icon: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
}


IconLink.defaultProps = {
    icon: '',
  href: '',
    className:''
}

export default IconLink
