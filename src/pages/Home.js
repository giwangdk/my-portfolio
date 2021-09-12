import React, {Component} from 'react';

import Layout from '../components/templa/Layout'
import About from '../components/organism/About'
import Experience from '../components/organism/Experience'
import Work from '../components/organism/Work'
import Interest from '../components/organism/Interest'
import Education from '../components/organism/Education'
import Skill from '../components/organism/Skill'

import 'bootstrap/dist/css/bootstrap.min.css'

class Home extends Component{
    render(){
        return(
            <div>
                <Layout>
                    <About />
                    <Experience />
                    <Education/>
                    <Work />
                    <Skill/>
                    <Interest />
            </Layout>
            </div>
        )
    }
}

export default Home;