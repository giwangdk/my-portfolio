/* @flow */
import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './_style.scss'


const Date = (props) => (
  <h5 className={classnames(styles.date, props.className)}>{props.children}</h5>
)

Date.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}


Date.defaultProps = {
    className: '',
    children: '',
}

export default Date
