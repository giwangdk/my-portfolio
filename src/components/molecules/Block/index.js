/* @flow */
import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import HeadingBlock from '../HeadingBlock'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './_style.scss'


const Block = (props) => {
    const { className, title, subtitle, children } = props;
    return (
    <div className={classnames(styles.block, className)}>
        <HeadingBlock title={title} subtitle={subtitle} anchor="see all" className="block_heading my-3" />
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
