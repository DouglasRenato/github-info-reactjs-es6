import React, {Component} from 'react'

import GitHubUser from '../services/GitHubUser'

class SearchUser extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit(e) {
    e.preventDefault()

    GitHubUser.getByUsername(this.refs.username.value)
      .then((response) => {
        console.log('response user ===> ', response)
        this.props.updateUser(response.data)
      })
        .catch((e) => {
          console.log('Error user ===> ', e)
          this.props.updateUser(null)
        })
          .finally(() => {
            console.log('This finally block')
          })

    GitHubUser.getReposByUsername(this.refs.username.value).then((response) => {
      console.log('response repos ===> ', response)
      this.props.updateRepos(response.data)
    })
      .catch((e) => {
        console.log('Error repos ===> ', e)
      })
        .finally(() => {
          console.log('Repos = This finally block')
        })
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid" style={{marginBottom: '1.5rem', boxShadow: '-5px 0 15px #aaa'}}>
        <div className="container">
          <h1 className="display-1">
            GitHub Info
          </h1>
          <h3 className="lead">
            Liste informações de um usuário especifico do GitHub!
          </h3>

          <form onSubmit={this.handleSubmit} style={{marginTop: '2.5rem'}}>
            <div className="form-group">
              <label for="exampleInputEmail1">
                <i className="fas fa-user"></i>
                {' Username'}
              </label>
              <input 
                type="text" 
                className="form-control form-control-lg"
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Ex.: douglasrenato"
                ref="username"
              />
            </div>
            <button 
              type="submit" 
              className="btn btn-lg btn-primary col-md-2">
              <i className="fas fa-search"></i>
              {' Buscar'}
            </button>
          </form>
          
        </div>
      </div>
    )
  }
}

// PropTypes (usado para aumentar a confiabilidade do código, 
// informando funções, objetos, arrays... 
// que são necessários para o funcionamento do component)
GitHubUser.propTypes = {
  updateUser: React.PropTypes.func.isRequired, // func = usa uma função / isRequired = não funciona sem
  updateRepos: React.PropTypes.func // func = usa uma função e funciona mesmo sem
}

export default SearchUser