import React, {Component} from 'react';

import Layout from '../components/templa/Layout'
import About from '../components/organism/About'
import Experience from '../components/organism/Experience'
import Work from '../components/organism/Work'

import 'bootstrap/dist/css/bootstrap.min.css'

class Home extends Component{
    render(){
        return(
            <div>
                <Layout>
                    <About />
                    <Experience />
                    <Work/>
            </Layout>
            </div>
        )
    }
}

export default Home;