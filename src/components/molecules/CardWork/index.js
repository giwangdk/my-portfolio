import React from 'react'
import PropTypes from 'prop-types'


import 'bootstrap/dist/css/bootstrap.min.css'

import Card from '../../atoms/Card'
import Image from '../../atoms/Image'
import Text from '../../atoms/Text'
import Button from '../../atoms/Button'
import Badge from '../../atoms/Badge'


const CardWork = (props) => {
    const { src,alt, name, desc, webiste, code } = props
    return (
        <Card className="card">
            <div className="card-header">
                <Image src={src} className="image" alt={alt}/>
            </div>
            <div className="body">
                <Text className="text">{name}</Text>
                <Text className="text">{desc}</Text>
            </div>
            <div className="card-footer">
                <Button className="button button-teal rounded medium" href={webiste}>Visit Website</Button>
                <Button className="ouline ouline-teal rounded medium" href={code}>Code</Button>
            </div>
        </Card>
    )
}

CardWork.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    website: PropTypes.string,
    code: PropTypes.string,

}

CardWork.defaultProps = {
    src: '',
    alt: '',
    name: '',
    desc: '',
    website: '',
    code: '',
}

export default CardWork