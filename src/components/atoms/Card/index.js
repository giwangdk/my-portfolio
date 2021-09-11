/* @flow */
import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './_style.scss'

const CARD_THEME = {
  CARD_DARK: "card_dark",
  CARD_LIGHT: "card_light",
  CARD_YELLOW: 'card_yellow',
  CARD_PRIMARY : 'card_primary',
  CARD_PINK: 'card_pink'
}

const Card = (props) => (
  <div className={classnames(styles.card, props.className, props.theme)} >{props.children} </div>
)

Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme:PropTypes.string
}


Card.defaultProps = {
    className: '',
    children: '',
    theme: CARD_THEME.CARD_LIGHT,
      
}

export default Card
