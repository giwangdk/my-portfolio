import React from 'react'
import PropTypes from 'prop-types'


import 'bootstrap/dist/css/bootstrap.min.css'

import Card from '../../atoms/Card'
import Avatar from '../../atoms/Avatar'
import Subtitle from '../../atoms/Subtitle'


const CardMember = (props) => {
    const { src,alt, subtitle, member, total } = props
    return (
        <Card className="card card_yellow">
            <div className="row">
                <div className="col-4">
                    <Avatar className="avatar" src={ src} alt={alt }/>
                </div>
                <div className="col-8">
                    <Subtitle>{subtitle}</Subtitle>
                    <p>{member} { total}</p>
                </div>
            </div>
        </Card>
    )
}

CardMember.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    subtitle: PropTypes.string,
    member: PropTypes.string,
    total: PropTypes.number,

}

CardMember.defaultProps = {
    src: '',
    alt: '',
    subtitle: '',
    member: '',
    total: '',
}

export default CardMember