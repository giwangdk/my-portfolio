import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './_style.scss'

const Anchor = (props) => {
    const { className, children, href } = props
    const classProps = classnames(
        styles.anchor,
        className
    )
    return (
        <a className={classProps} href={href}>{children}</a>
    )
}

Anchor.propTypes = {
    className : PropTypes.string,
    children: PropTypes.string,
    href:PropTypes.string
}

Anchor.defaultProps = {
    className :'',
    children : '',
    href:'#'
}

export default Anchor;