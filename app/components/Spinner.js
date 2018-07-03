var React = require('react')

// Stateless Components (componente que não possui state / refatoração / uma simples função)
function Spinner () {
  return (
    <div className="container"
      style={{height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <i className="fas fa-spinner fa-spin"
        style={{fontSize: '3rem'}}>
      </i>
    </div>
  )
}

module.exports = Spinner