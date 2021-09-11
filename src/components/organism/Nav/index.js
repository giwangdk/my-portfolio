/* @flow */
import * as React from 'react'
import PropTypes from 'prop-types'

import Avatar from '../../atoms/Avatar'
import NavLink from '../../molecules/NavLink'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './_style.scss'
import  '@fortawesome/free-solid-svg-icons'

class Nav extends React.Component{
    render() {
        return (
            <nav>
                <Avatar className="avatar" src=""/>
                <NavLink/>
            </nav>
        )
    }
}

Nav.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    anchor:PropTypes.string
}


Nav.defaultProps = {
    className: '',
    title: '',
    anchor:''
}

export default Nav
