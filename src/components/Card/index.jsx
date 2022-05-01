import PropTypes from 'prop-types'

import { Container, Text } from './style'
import CardIcon from '../Icons/CardIcon'

function Card({ temp, day }) {
  return (
    <Container>
      <Text>{temp}</Text>
      <CardIcon />
      <Text>{day}</Text>
    </Container>
  )
}

Card.propTypes = {
  temp: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
}

export default Card
