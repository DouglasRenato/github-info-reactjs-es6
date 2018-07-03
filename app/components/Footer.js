var React = require('react')

var Footer = React.createClass({
  render: function () {
    return (
      <footer className="fixed-bottom"
        style={{background: '#eee', margin: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <p style={{padding: '.5em', margin: 0, fontSize: '12px', color: '#777'}}>
          Feito com <i className="fab fa-react"></i> & <i className="fas fa-beer"></i> por Douglas Renato em São Paulo
        </p>
      </footer>
    )
  }
})

module.exports = Footer