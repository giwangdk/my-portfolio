/* @flow */
import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Title from '../../atoms/Title'
import Anchor from '../../atoms/Anchor'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './_style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const NavLink = (props) => {
    const { className, title, anchor } = props;
    return (
        <div className={classnames(styles.block_heading, className)}>
            <ul className="d-flex flex-column justify-content-between"> 
                <li className="nav link mt-3">
                    <Anchor className="anchor" href="#home"><FontAwesomeIcon icon={ faHome} className="mr-3"/>Home</Anchor>
                </li>
                <li className="nav link mt-3 mt-2">
                    <Anchor className="anchor" href="#about"><FontAwesomeIcon icon={ faHome} className="mr-3"/>About</Anchor>
                </li>
                <li className="nav link mt-3">
                    <Anchor className="anchor" href="#experience"><FontAwesomeIcon icon={ faHome} className="mr-3"/>Experience</Anchor>
                </li>
                <li className="nav link mt-3">
                    <Anchor className="anchor" href="#works"><FontAwesomeIcon icon={ faHome} className="mr-3"/>Works</Anchor>
                </li>
                <li className="nav link mt-3">
                    <Anchor className="anchor" href="#skills"><FontAwesomeIcon icon={ faHome} className="mr-3"/>Skills</Anchor>
                </li>
                <li className="nav link mt-3">
                    <Anchor className="anchor" href="#interest"><FontAwesomeIcon icon={ faHome} className="mr-3"/>Interest</Anchor>
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
