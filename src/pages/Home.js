import React, {Component} from 'react';

import Layout from '../components/templa/Layout'
import About from '../components/organism/About'

import 'bootstrap/dist/css/bootstrap.min.css'

class Home extends Component{
    render(){
        return(
            <div>
                <Layout>
                    <About/>
            </Layout>
            </div>
        )
    }
}

export default Home;