import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './_style.scss'

const Anchor = (props) => {
    const { classNames, children, href } = props
    const classProps = classnames(
        styles.anchor,
        classNames
    )
    return (
        <a className={classProps} href={href}>{children}</a>
    )
}

Anchor.propTypes = {
    classNames : PropTypes.string,
    children: PropTypes.string,
    href:PropTypes.string
}

Anchor.defaultProps = {
    classNames :'',
    children : '',
    href:'#'
}

export default Anchor;