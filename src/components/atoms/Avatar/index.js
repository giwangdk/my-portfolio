import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './_style.scss';


const Avatar = (props) => {
    const { classNames, src, alt } = props;
    return (
        <div className={classnames(styles.avatar, classNames)}>
        <img src={src} alt={alt} />
        </div>
    )
}

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    classNames: PropTypes.string,
    alt: PropTypes.string
}

Avatar.defaultProps = {
    src: '',
    alt: '',
    className: '',
}

export default Avatar