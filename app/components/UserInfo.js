var React = require('react')

var UserRepos = require('./UserRepos')
var Spinner =require('./Spinner')

var UserInfo = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true
    }
  },

  // Component LifeCycle
  componentWillReceiveProps: function () {
    this.setState({isLoading: false})
  },

  componentDidMount: function () {
    this.setState({isLoading: false})
  },

  render: function () {
    var userInfo = 
    this.state.isLoading ? 
      <Spinner /> :
    
    this.props.user ? 
    (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center border-dark shadow-sm" 
              style={{marginBottom: '1.5rem'}}>
              <div style={{padding: '1em'}}>
                <img className="card-img-top rounded-circle" 
                  src={this.props.user.avatar_url} 
                  alt={this.props.user.name}
                />
              </div>
              <div className="card-body" style={{background: '#eee'}}>
                <h3 className="card-title">{this.props.user.name}</h3>
                <p className="card-text">{this.props.user.bio}</p>
                <hr />
                <p className="card-text text-left" style={{margin: '0'}}>
                  <small class="text-muted">
                    <i className="fas fa-user"></i> 
                    {` ${this.props.user.login}`}
                  </small>
                </p>
                <p className="card-text text-left" style={{margin: '0'}}>
                  <small class="text-muted">Seguidores: {this.props.user.followers} </small>
                  | 
                  <small class="text-muted"> Seguindo: {this.props.user.following}</small>
                </p>
                <a href={this.props.user.html_url} 
                  target="_blank" 
                  className="btn btn-lg btn-outline-info col-md-12"
                  style={{marginTop: '1.5em'}}>Ver mais
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <UserRepos repos={this.props.repos}/>
          </div>
        </div>
      </div>
    ) : 
    (
      <div className="container text-center">
        <h5 style={{color: '#aaa', height: '25vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <i className="fas fa-info" style={{margin: '1em', fontSize: '1.9em'}}></i>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            Tente uma ou outra busca! <i className="far fa-smile-wink" style={{margin: '0 0 0 .3em'}}></i>
          </div>
        </h5>
      </div>
    )

    return userInfo
  }

})
// function UserInfo (props) {
  
// }

// PropTypes (usado para aumentar a confiabilidade do código, 
// informando funções, objetos, arrays... 
// que são necessários para o funcionamento do component)
UserInfo.propTypes = {
  user: React.PropTypes.object, // informa que é um objeto
  repos: React.PropTypes.array // informa que é um array
}

module.exports = UserInfo