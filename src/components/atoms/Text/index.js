import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './_style.scss';

const Text = (props) => {
    const { className, children } = props
    return (
        <p className={classnames(styles.text, className)} >{children}</p>
    )
}

Text.propTypes = {
    className : PropTypes.string,
    children: PropTypes.string
}

Text.defaultProps = {
    className : '',
    children : ''
}

export default Text