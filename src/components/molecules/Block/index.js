/* @flow */
import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Title from '../../atoms/Title'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './_style.scss'


const Block = (props) => {
    const { className, title, children } = props;
    return (
    <div className={classnames(styles.block, className)}>
            <Title className="title mb-3" >{title}</Title>
        {children}
    </div>
    )


}

Block.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    title: PropTypes.string,
    anchor:PropTypes.string
}


Block.defaultProps = {
    className: '',
    children: '',
    title: '',
    anchor:''
}

export default Block
