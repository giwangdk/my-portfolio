/* @flow */
import * as React from 'react'
import PropTypes from 'prop-types'


import Block from '../../molecules/Block'
import SosmedIcon from '../../molecules/SosmedIcon'
import Card from '../../atoms/Card'
import Text from '../../atoms/Text'

import 'bootstrap/dist/css/bootstrap.min.css'
import  '@fortawesome/free-solid-svg-icons'
import Button from '../../atoms/Button'

class About extends React.Component{
    render() {
        return (
            <div id="about">
                <Block className="d-flex flex-column justify-content-center  block" title="Hello folks!">
                    <h3>welcome to <span>Giwang's</span> page</h3>
                    <Card className="card">
                        <Text className="text">
                        Im a Self-motivated Developer⚡. <br /> Passionate and hardworking coder. Organized approach to meeting multiple, concurrent deadlines. Pulls from active knowledge of current technology landscape to promote best practices in web technology.</Text>
                    </Card>
                    <div className="row mt-3">
                        <div className="col-6">
                            <Button className="button button-dark-teal rounded medium">Lets get started</Button>
                        </div>
                        <div className="col-6">
                            <SosmedIcon/>
                        </div>
                    </div>
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
