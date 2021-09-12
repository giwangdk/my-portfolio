import React from 'react'
import PropTypes from 'prop-types'


import 'bootstrap/dist/css/bootstrap.min.css'

import Card from '../../atoms/Card'
import Year from '../../atoms/Year'
import Text from '../../atoms/Text'


const CardEducation = (props) => {
    const { school, year, desc} = props
    return (
        <Card className="card mt-3">
            <div className="card-top p-0">
                <div className="row">
                    <div className="col-8">            
                        <h5 className="school">{ school}</h5>
                    </div>
                    <div className="col-4 text-right">
                        <Year className="year">{year}</Year>
                    </div>
                </div>
            </div>
            <div className="card-body p-0">
                <Text className="text">{desc}</Text>
            </div>
        </Card>
    )
}

CardEducation.propTypes = {
    school: PropTypes.string,
    year: PropTypes.string,
    desc:PropTypes.string,
}

CardEducation.defaultProps = {
    school : '',
    year: '',
    desc:'',
}

export default CardEducation