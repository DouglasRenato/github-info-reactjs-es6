import React, {Component} from 'react'

import UserRepos from './UserRepos'
import Spinner from './Spinner'

// test only about how to use style in variables...
const css_fixedSelf =  {
  //position: 'fixed',
  //top: '15px'
}

class UserInfo extends Component {
  constructor(props) {
      super(props)
      this.state = {
      isLoading: true
    }
  }

  // Component LifeCycle
  componentWillReceiveProps() {
    this.setState({isLoading: false})
  }

  componentDidMount() {
    this.setState({isLoading: false})
  }

  // componentWillUnmount() {
  // }

  render() {
    const {user, repos} = this.props //atribuição via desestruturação (destructuring assignment) 
    const userInfo = 
      user ? 
        (
          <div className="container">
            <div className="row">
              <div className="col-md-4" style={css_fixedSelf}>
              {this.state.isLoading ? <Spinner /> : null}
                <div className="card text-center border-dark shadow-sm" 
                  style={{marginBottom: '1.5rem'}}>
                  <div style={{padding: '1em'}}>
                    <img className="card-img-top rounded-circle" 
                      src={user.avatar_url} 
                      alt={user.name}
                    />
                  </div>
                  <div className="card-body" style={{background: '#eee'}}>
                    <h3 className="card-title">{user.name}</h3>
                    <p className="card-text">{user.bio}</p>
                    <hr />
                    <p className="card-text text-left" style={{margin: '0'}}>
                      <small class="text-muted">
                        <i className="fas fa-user"></i> 
                        {` ${user.login}`}
                      </small>
                    </p>
                    <p className="card-text text-left" style={{margin: '0'}}>
                      <small class="text-muted">Seguidores: {user.followers} </small>
                      | 
                      <small class="text-muted"> Seguindo: {user.following}</small>
                    </p>
                    <a href={user.html_url} 
                      target="_blank" 
                      className="btn btn-lg btn-outline-info col-md-12"
                      style={{marginTop: '1.5em'}}>Ver mais
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <UserRepos repos={repos}/>
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

}

// PropTypes (usado para aumentar a confiabilidade do código, 
// informando funções, objetos, arrays... 
// que são necessários para o funcionamento do component)
UserInfo.propTypes = {
  user: React.PropTypes.object, // informa que é um objeto
  repos: React.PropTypes.array // informa que é um array
}

export default UserInfo