import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './_style.scss';

const Brand = (props) => {
    const { className, children, href } = props
    const classProps = classnames(
        styles.brand,
        className
    )
    return (
        <a className={classProps} href={href}>{children}</a>
    )
}

Brand.propTypes = {
    className : PropTypes.string,
    children : PropTypes.string,
    href: PropTypes.string
}

Brand.defaultProps = {
    className :'',
    children: '',
    href:''
}

export default Brand;