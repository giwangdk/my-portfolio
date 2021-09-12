/* @flow */
import * as React from 'react'
import PropTypes from 'prop-types'


import Block from '../../molecules/Block'

import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './_style.scss'
import  '@fortawesome/free-solid-svg-icons'
import CardExperience from '../../molecules/CardExperience'

class Experience extends React.Component{
        
    
    render() {
        const experiences = [
            {
                role: "Laboratory Chief Asistant",
                year: "2019",
                company: "Laboratorium Sistem Informasi Univesitas Gunadarma",
                desc: "Lead and activate all laboratory activities"
            },
            {
                role: "Front End Engineer Intern",
                year: "2020",
                company: "Digitiket",
                desc: "Converting and slicing desain UI/UX into usable web presence with HTML, JavaScript, Framework CSS"
            },
            {
                role: "Web Developer Intern",
                year: "2021",
                company: "Gosocial",
                desc: "Developed user interfaces with modern PHP frameworks, HTML5 and CSS3."
            },
            {
                role: "Front End enginner Specialist Intern",
                year: "2021",
                company: "Sagara Technology",
                desc: "Developed user interfaces with modern Javascript frameworks, HTML5 and CSS3."
            },
        ]

        return (
            <div id="experience">
                <Block className="d-flex flex-column justify-content-center  block" title="Experience">
                    {
                        experiences.map((experience) => (
                            <CardExperience subtitle={experience.role} year={experience.year} company={experience.company} desc={experience.desc} key={ experience.role}/>)
                        )
                    }
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
