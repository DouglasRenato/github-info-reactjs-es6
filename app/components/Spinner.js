import React from 'react'

// Stateless Components (componente que não possui state / refatoração / uma simples função)
const Spinner = () => {
  return (
    <div className="container"
      style={{height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', 
              background: 'rgba(255, 255, 255, 0.5)', position: 'absolute', zIndex: '999'
            }}>
      <i className="fas fa-spinner fa-spin"
        style={{fontSize: '3rem'}}>
      </i>
    </div>
  )
}

export default Spinner