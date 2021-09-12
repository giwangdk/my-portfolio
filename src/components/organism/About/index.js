/* @flow */
import * as React from 'react'
import PropTypes from 'prop-types'


import Block from '../../molecules/Block'
import SosmedIcon from '../../molecules/SosmedIcon'
import Card from '../../atoms/Card'
import Text from '../../atoms/Text'

import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './_style.scss'
import  '@fortawesome/free-solid-svg-icons'
import Button from '../../atoms/Button'

class About extends React.Component{
    render() {
        return (
            <div id="about">
                <Block className="d-flex flex-column justify-content-center  block" title="Hello folks!">
                    <h3>welcome to <span>Giwang's</span> page</h3>
                    <Card className="card p-3">
                        <Text className="text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quo nobis aliquam beatae tempore consequatur error tempora delectus sunt esse sed veniam fuga necessitatibus recusandae porro laborum sit reprehenderit, commodi, animi placeat, earum maxime facere. Minus et voluptatibus sapiente dicta.
                        </Text>
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
