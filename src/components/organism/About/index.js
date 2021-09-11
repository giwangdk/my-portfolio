/* @flow */
import * as React from 'react'
import PropTypes from 'prop-types'


import Block from '../../molecules/Block'
import Card from '../../atoms/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './_style.scss'
import  '@fortawesome/free-solid-svg-icons'

class About extends React.Component{
    render() {
        return (
            <div id="about">
                <Block className="d-flex flex-column justify-content-center  block" title="About Us">
                <Card className="card">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus eaque corrupti mollitia porro libero. Perferendis aspernatur inventore numquam odio nulla.</p>
                </Card>
            </Block>
            </div>
            
            )
    }
}

About.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    anchor:PropTypes.string
}


About.defaultProps = {
    className: '',
    title: '',
    anchor:''
}

export default About
