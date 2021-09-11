import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './_style.scss';

export const ButtonType = {
    BUTTON: 'button',
    RESET: 'reset',
    SUBMIT: 'submit',
  }


export const ButtonVariant = {
    BUTTON_BLACK: 'button-black',
    BUTTON_TEAL: 'button-teal',
    BUTTON_LIGHTBLACK: 'button-light-black',
    BUTTON_GREY: 'button-grey',
    BUTTON_DARKTEAL: 'button-dark-teal',
    BUTTON_PINK: 'button-pink',
    OUTLINE_BLACK: 'outline-black',
    OUTLINE_TEAL: 'outline-teal',
    OUTLINE_LIGHTBLACK: 'outline-light-black',
    OUTLINE_GREY: 'outline-grey',
    OUTLINE_DARKTEAL: 'outline-dark-teal',
    OUTLINE_PINK: 'outline-pink',
    SOFT_BLACK: 'soft-black',
    SOFT_TEAL: 'soft-teal',
    SOFT_LIGHTBLACK: 'soft-light-black',
    SOFT_GREY: 'soft-grey',
    SOFT_PINK: 'soft-pink'
}

export const ButtonTheme = {
    DEFAULT: 'default',
    ROUNDED: 'rounded',
    PILL : 'pill'
}



export const ButtonSize = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large'
  }


const Button = (props) => {
    const { type, theme, variant, size, children, className, disabled, onClick } = props
    const classProps = classnames(
        styles.button,
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
        <button onClick={onClick} type={type} disabled={disabled} className={classProps}>
            {children}
        </button>
    )
}



Button.propTypes = {
    type: PropTypes.string,
    variant:PropTypes.string,
    theme: PropTypes.string,
    size: PropTypes.string,
    onClick:PropTypes.func,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled:PropTypes.bool
}

Button.defaultProps = {
    type: ButtonType.BUTTON,
    variant:ButtonVariant.BUTTON_TEAL,
    theme: ButtonTheme.DEFAULT,
    size: ButtonSize.MEDIUM,
    onClick: () => { },
    className: '',
    disabled: false
}

export default Button;