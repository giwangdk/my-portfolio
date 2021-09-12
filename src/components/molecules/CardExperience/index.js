import React from 'react'
import PropTypes from 'prop-types'


import 'bootstrap/dist/css/bootstrap.min.css'

import Card from '../../atoms/Card'
import Year from '../../atoms/Year'
import Text from '../../atoms/Text'
import Subtitle from '../../atoms/Subtitle'


const CardExperience = (props) => {
    const { subtitle, year, company, desc} = props
    return (
        <Card className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-8">            
                        <Subtitle className="subtitle">{ subtitle}</Subtitle>
                    </div>
                    <div className="col-4">
                        <Year className="year">{year}</Year>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <h3>{company}</h3>
                <Text className="text">{desc}</Text>
            </div>
        </Card>
    )
}

CardExperience.propTypes = {
    subtitle: PropTypes.string,
    year: PropTypes.string.isRequired,
    company:PropTypes.string.isRequired,
    desc:PropTypes.string.isRequired,
}

CardExperience.defaultProps = {
    subtitle : '',
    year: '',
    company: '',
    desc:'',
}

export default CardExperience