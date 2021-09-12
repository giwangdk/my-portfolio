import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './_style.scss';

const List = (props) => {
    const { className, children } = props
    return (
        <li className={classnames(styles.text, className)} >{children}</li>
    )
}

List.propTypes = {
    className : PropTypes.string,
    children: PropTypes.string
}

List.defaultProps = {
    className : '',
    children : ''
}

export default List