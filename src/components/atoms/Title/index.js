import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './_style.scss';

const Title = (props) => {
    const { classNames, children } = props
    return (
        <h1 className={classnames(styles.title, classNames)}>{children}</h1>
    )
}

Title.propTypes = {
    classNames : PropTypes.string,
    children : PropTypes.string
}

Title.defaultProps = {
    classNames : '',
    children : ''
}

export default Title