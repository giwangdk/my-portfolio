import React from 'react'
import PropTypes from 'prop-types'


import 'bootstrap/dist/css/bootstrap.min.css'

import Card from '../../atoms/Card'
import Image from '../../atoms/Image'
import Text from '../../atoms/Text'
import Button from '../../atoms/Button'
import Badge from '../../atoms/Badge'


const CardWork = (props) => {
    const { src,alt, name, desc, website, code } = props
    return (
            <Card className="card">
            <div className="card-header p-0">
                <Image src={src} className="image" alt={alt}/>
            </div>
            <div className="body p-0">
                <h5 className="my-3">{name}</h5>
                <Text className="text">{desc}</Text>
            </div>
            <div className="card-footer p-0 d-flex justify-content-between">
                <Button className="button button-teal pill medium " href={website}>Visit Website</Button>
                <Button className="outline outline-teal pill medium " href={code}>Code</Button>
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