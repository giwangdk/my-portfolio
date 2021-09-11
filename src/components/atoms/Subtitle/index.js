import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './_style.scss'
const SubTitle = (props) => (
        <h3 className={classnames(styles.subtitle, props.className)}>{props.children}</h3>
      )

SubTitle.propTypes = {
    classNames : PropTypes.string,
    children : PropTypes.string
}

SubTitle.defaultProps = {
    classNames :'',
    children : ''
}

export default SubTitle;