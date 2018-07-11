import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faBeer } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
      <footer className="fixed-bottom"
      style={{background: '#eee', margin: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <p style={{padding: '.5em', margin: 0, fontSize: '12px'}} className="text-muted">
          Feito com <FontAwesomeIcon icon={faReact} /> & <FontAwesomeIcon icon={faBeer} /> por Douglas Renato em São Paulo
        </p>
      </footer>
    )
}

export default Footer