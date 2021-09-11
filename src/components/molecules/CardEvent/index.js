import React from 'react'
import PropTypes from 'prop-types'


import 'bootstrap/dist/css/bootstrap.min.css'

import Card from '../../atoms/Card'
import Date from '../../atoms/Date'
import Button from '../../atoms/Button'


const CardEvent = (props) => {
    const { date, event, guest } = props
    return (
        <Card className="card">
            <div className="card-header border-0 pb-0">
                <Date className="date">{ date}</Date>
            </div>
            <div className="card-body">
                <p>{event}</p>
                <p>{guest} went</p>
                <Button className="button button-primary rounded d-block w-100 small">view</Button>
            </div>
        </Card>
    )
}

CardEvent.propTypes = {
    children: PropTypes.string,
    date: PropTypes.string,
    event: PropTypes.string,
    guets: PropTypes.string
}

CardEvent.defaultProps = {
    children : '',
    date:  '',
    event: '',
    guets: ''
}

export default CardEvent