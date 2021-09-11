/* @flow */
import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Title from '../../atoms/Title'
import Anchor from '../../atoms/Anchor'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './_style.scss'
import  '@fortawesome/free-solid-svg-icons'

const NavLink = (props) => {
    const { className, title, anchor } = props;
    return (
        <div className={classnames(styles.block_heading, className)}>
            <ul>
                <li className="nav link">
                    <i class="fas fa-home"></i><Anchor className="anchor" href="#home">Home</Anchor>
                </li>
                <li className="nav link">
                    <Anchor className="anchor" href="#about">About</Anchor>
                </li>
                <li className="nav link">
                    <Anchor className="anchor" href="#experience">Experience</Anchor>
                </li>
                <li className="nav link">
                    <Anchor className="anchor" href="#works">Works</Anchor>
                </li>
                <li className="nav link">
                    <Anchor className="anchor" href="#skills">Skills</Anchor>
                </li>
                <li className="nav link">
                    <Anchor className="anchor" href="#interest">Interest</Anchor>
                </li>
        </ul>
    </div>
    )

}

NavLink.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    anchor:PropTypes.string
}


NavLink.defaultProps = {
    className: '',
    title: '',
    anchor:''
}

export default NavLink
