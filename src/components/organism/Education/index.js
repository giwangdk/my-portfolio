/* @flow */
import * as React from 'react'


import Block from '../../molecules/Block'

import 'bootstrap/dist/css/bootstrap.min.css'
import  '@fortawesome/free-solid-svg-icons'
import CardEducation from '../../molecules/CardEducation'

class Education extends React.Component{
        
    
    render() {
        const educations = [
            {
                school: "SMAN 3 Kota Sukabumi",
                year: "2015 - 2018",
                desc: ""
            },
            {
                school: "Hactiv8",
                year: "2021- 2022",
                desc: "React and React Native"
            },
            {
                school: "Universitas Gunadarma",
                year: "2018-2022",
                desc: "Sistem Informasi"
            }
        ]

        return (
            <div id="education">
                <Block className="d-flex flex-column justify-content-center  block" title="Education">
                    {
                        educations.map((education) => (
                            <CardEducation school={education.school} year={education.year} desc={education.desc} key={education.school} />
                        )
                        )
                    }
            </Block>
            </div>
            
            )
    }
}


export default Education
