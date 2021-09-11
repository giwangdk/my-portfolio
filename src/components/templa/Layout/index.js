/* @flow */
import * as React from 'react'

import PropTypes from 'prop-types'

import Nav from '../../organism/Nav'
import Footer from '../../organism/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'


const Layout = ({children}) => {
    
    return (
        <>
        <Nav />
            {children }
        <Footer/>
            </>
)

}

Layout.propTypes = {
    children: PropTypes.node,
}


Layout.defaultProps = {
    children: '',
}

export default Layout
