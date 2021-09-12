/* @flow */
import * as React from 'react'
import PropTypes from 'prop-types'


import Block from '../../molecules/Block'

import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './_style.scss'
import  '@fortawesome/free-solid-svg-icons'
import CardWork from '../../molecules/CardWork'

class Work extends React.Component{
        
    
    render() {
        const works = [
            {
                name: "Me Fabulous",
                src: "../../../images/127-0-0-1-8000-register.png",
                desc: "Website Booking Makeup Artist",
                website: "http://me-fabulous.code-breeder.com/"
            },
            {
                name: "Slicing BWA Store",
                src: "./../../images/Store - Your Bes (6).png",
                desc: "Build with Angga",
                website: "http://me-fabulous.code-breeder.com/"
            },
            {
                name: "Landing Page Maker",
                src: "../../../images/Frontend Mentor  (1).png",
                desc: "Front End Mentor Challenge",
                website: "http://me-fabulous.code-breeder.com/"
            },
            {
                name: "Recipe Blog",
                src: "../../../images/Capture.PNG",
                desc: "Vue jS",
                website: "http://me-fabulous.code-breeder.com/"
            },
            {
                name: "CountDown Timer",
                src: "../../../images/Capture1.PNG",
                desc: "Front Ent Mentor Challenge",
                website: "http://me-fabulous.code-breeder.com/"
            }
        ]

        return (
            <div id="works">
                <Block className="d-flex flex-column justify-content-center  block" title="Works">

                    <div className="row">
                        {works.map((work) => (
                            <div className="col-lg-4 col-md-6 mb-3"> 
                                <CardWork name={work.name} src={work.src}
                                    desc={work.desc} website={work.website}/>
                            </div>
                        ))}
                    </div>

            </Block>
            </div>
            
            )
    }
}

Work.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    anchor:PropTypes.string
}


Work.defaultProps = {
    className: '',
    title: '',
    anchor:''
}

export default Work
