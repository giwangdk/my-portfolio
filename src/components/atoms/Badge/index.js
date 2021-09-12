import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './_style.scss';



export const BadgeVariant = {
    BADGE_BLACK: 'badge-black',
    BADGE_TEAL: 'badge-teal',
    BADGE_LIGHTBLACK: 'badge-light-black',
    BADGE_GREY: 'badge-grey',
    BADGE_DARKTEAL: 'badge-dark-teal',
    BADGE_PINK: 'badge-pink',
}



const Badge = (props) => {
    const { type, theme, variant, size, children, className, disabled, onClick } = props
    const classProps = classnames(
        styles.badge,
        styles.soft,
        styles.outline,
        styles[type],
        styles[variant],
        styles[theme],
        styles[size],
        {
            [styles.disabled] :disabled
        },
        className
    )

    return (
        <div onClick={onClick} type={type} disabled={disabled} className={classProps}>
            {children}
        </div>
    )
}



Badge.propTypes = {
    variant: PropTypes.string,
    children : PropTypes.node
}

Badge.defaultProps = {
    variant: BadgeVariant.BADGE_TEAL,
    children:''
}

export default Badge;