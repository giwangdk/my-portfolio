/* @flow */
import * as React from 'react'

import  './_style.scss'
import IconLink from '../../atoms/IconLink'
import {faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const SosmedIcon = () => (
  <ul className="d-flex  justify-content-end">
    <li><IconLink href="#" icon={faInstagram} className="anchor mr-3" /></li>
    <li><IconLink href="#" icon={faGithub} className="anchor mr-3" /></li>
    <li><IconLink href="#" icon={ faLinkedin} className="anchor"/></li>
  </ul>
)
export default SosmedIcon
