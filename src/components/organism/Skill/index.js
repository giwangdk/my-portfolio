/* @flow */
import * as React from 'react'
import PropTypes from 'prop-types'


import Block from '../../molecules/Block'

import 'bootstrap/dist/css/bootstrap.min.css'
import List from '../../atoms/List'
import Card from '../../atoms/Card'

class Skill extends React.Component{
    render() {
        const skills = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'PHP', 'Laravel', 'Vue JS']
        return (
            <div id="skills">
                <Block className="d-flex flex-column justify-content-center  block" title="Skill">
                    <Card className="card">
                    <ul>
                        {skills.map((skill) => (
                            <List>{ skill}</List>
                        ))}
                    </ul>
                   </Card>
            </Block>
            </div>
            
            )
    }
}

Skill.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    anchor:PropTypes.string
}


Skill.defaultProps = {
    className: '',
    title: '',
    anchor:''
}

export default Skill
