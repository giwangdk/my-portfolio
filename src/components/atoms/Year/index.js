import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './_style.scss';

const Year = (props) => {
    const { className, children } = props
    return (
        <span className={classnames(styles.year, className)} >{children}</span>
    )
}

Year.propTypes = {
    className : PropTypes.string,
    children: PropTypes.string,
}

Year.defaultProps = {
    className : '',
    children : ''
}

export default Year