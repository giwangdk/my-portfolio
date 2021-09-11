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
            <div className="row">
                <div className="col-4">
                    <Nav/>
                </div>
                <div className="col-8">
                    <div className="container">
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
