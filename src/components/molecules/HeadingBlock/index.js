/* @flow */
import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Title from '../../atoms/Title'
import Anchor from '../../atoms/Anchor'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './_style.scss'


const HeadingBlock = (props) => {
    const { className, title, anchor } = props;
    return (
        <div className={classnames(styles.block_heading, className)}>
         <div className="row">
            <div className="col-10">
            <Title>{title}</Title>
            </div>
            <div className="col-2 text-right">
                <Anchor>{anchor}</Anchor>
            </div>
        </div>
    </div>
    )

}

HeadingBlock.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    anchor:PropTypes.string
}


HeadingBlock.defaultProps = {
    className: '',
    title: '',
    anchor:''
}

export default HeadingBlock
