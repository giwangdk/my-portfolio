/* @flow */
import * as React from 'react'
import PropTypes from 'prop-types'


import Block from '../../molecules/Block'

import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './_style.scss'
import  '@fortawesome/free-solid-svg-icons'
import CardExperience from '../../molecules/CardExperience'

class Experience extends React.Component{
    constructor(props) {
        super(props);
        this.state: [{
            experience: {
                role:""
            }
        }]
    }
    render() {
        return (
            <div id="experience">
                <Block className="d-flex flex-column justify-content-center  block" title="Experience">
                    <CardExperience subtitle="Front End Developer" year="2020 - 2021" company="Digitiket" desc="lorem" />
            </Block>
            </div>
            
            )
    }
}

Experience.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    anchor:PropTypes.string
}


Experience.defaultProps = {
    className: '',
    title: '',
    anchor:''
}

export default Experience
