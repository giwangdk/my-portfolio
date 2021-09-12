import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './_style.scss';

const Title = (props) => {
    const { className, children } = props
    return (
        <h1 className={classnames(styles.title, className)} >{children}</h1>
    )
}

Title.propTypes = {
    className : PropTypes.string,
    children: PropTypes.string
}

Title.defaultProps = {
    className : '',
    children : ''
}

export default Title