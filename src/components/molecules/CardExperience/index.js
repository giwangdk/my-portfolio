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
        <Card className="card mt-3">
            <div className="card-header">
                <div className="row">
                    <div className="col-8">            
                        <h6 className="subtitle">{ subtitle}</h6>
                    </div>
                    <div className="col-4 text-right">
                        <Year className="year">{year}</Year>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <Text>{company}</Text>
                <Text className="text">{desc}</Text>
            </div>
        </Card>
    )
}

CardExperience.propTypes = {
    subtitle: PropTypes.string,
    year: PropTypes.string,
    company:PropTypes.string,
    desc:PropTypes.string,
}

CardExperience.defaultProps = {
    subtitle : '',
    year: '',
    company: '',
    desc:'',
}

export default CardExperience