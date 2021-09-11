import React, {Component} from 'react';

import Layout from '../components/templa/Layout'

import Meetup from '../components/organism/Meetup'
import NextMeet from '../components/organism/NextMeet'
import About from '../components/organism/About'
import Members from '../components/organism/Members'
import PastMeetup from '../components/organism/PastMeetups'

import 'bootstrap/dist/css/bootstrap.min.css'

class Home extends Component{
    render(){
        return(
            <div className="container">
                <Layout>
                    <Meetup />
                    <NextMeet/>
                    <About/>
                    <Members/>
                    <PastMeetup/>
            </Layout>
            </div>
        )
    }
}

export default Home;