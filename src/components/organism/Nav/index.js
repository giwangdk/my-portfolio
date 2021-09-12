/* @flow */
import * as React from 'react'
import PropTypes from 'prop-types'


import giwang from '../../../images/giwang.jpg'
import Avatar from '../../atoms/Avatar'
import NavLink from '../../molecules/NavLink'


import './_style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import  '@fortawesome/free-solid-svg-icons'

class Nav extends React.Component{
    render() {
        return (
            <nav className="d-flex flex-column justify-content-center align-items-center">
                <Avatar classNames="avatar w-100 text-center" src={giwang} alt="me"/>
                <NavLink className="nav_link" />
            </nav>
        )
    }
}



export default Nav
