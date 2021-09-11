/* @flow */
import * as React from 'react'

import PropTypes from 'prop-types'

import Nav from '../../organism/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'


class Layout extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row w-100">
                <div className="col-3 fixed left-0">
                    <Nav/>
                </div>
                <div className="col-9">
                    <div className="container-fluid">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.node,
}


Layout.defaultProps = {
    children: '',
}

export default Layout
