
import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './_style.scss'


const Image = (props) => {
    const { src, alt, classNames} = props;
    return (
        <img src={src} alt={alt} className={classnames(styles.image, classNames)} />
    )
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
}


Image.defaultProps = {
    src: '',
    alt: '',
    className: '',
}

export default Image
