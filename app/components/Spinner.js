import React from 'react'
import { Container } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

// Stateless Components (componente que não possui state / refatoração / uma simples função)
const Spinner = () => {
  return (
    <Container 
      style={{
              height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', 
              background: 'rgba(255, 255, 255, 0.5)', position: 'absolute', zIndex: '999'
            }}
    >
      <FontAwesomeIcon icon={faSpinner} spin size="5x"/>
    </Container>
  )
}

export default Spinner