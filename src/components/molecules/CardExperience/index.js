import React from 'react'
import PropTypes from 'prop-types'


import 'bootstrap/dist/css/bootstrap.min.css'

import Card from '../../atoms/Card'
import Year from '../../atoms/Year'
import Text from '../../atoms/Text'


const CardExperience = (props) => {
    const { subtitle, year, company, desc} = props
    return (
        <Card className="card mt-3">
            <div className="card-header p-0">
                <div className="row">
                    <div className="col-8">            
                        <h5 className="subtitle">{ subtitle}</h5>
                    </div>
                    <div className="col-4 text-right">
                        <Year className="year">{year}</Year>
                    </div>
                </div>
            </div>
            <div className="card-body p-0">
                <Text className="text-muted">{company}</Text>
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