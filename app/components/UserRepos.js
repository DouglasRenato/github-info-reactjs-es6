import React, {Component} from 'react'

import Spinner from './Spinner'

class UserRepos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      reposCount: 0
    }
  }

  // Component LifeCycle
  componentWillReceiveProps(props) {
    this.setState({reposCount: props.repos.length, isLoading: false})
  }
  // Component LifeCycle
  // componentDidMount() {
  //   this.setState({isLoading: false})
  // }

  render() {
    const {repos} = this.props
    const reposList = repos.map((repo, key) => {
      return (
        <div key={key} className="card shadow-sm" style={{marginBottom: '1em'}}>
          <div className="card-body">
            <h5 className="card-title float-left">{repo.name}</h5>
            <span className="float-right">
              <i className="fas fa-star" style={{color: '#6c757d'}}></i>
              <small className="badge badge-secondary ml-1">{repo.stargazers_count}</small>
            </span>
            <br /> <br />
            <p className="card-text">{repo.description}</p>
            <a href={repo.html_url} target="_blank" className="btn btn-sm btn-outline-secondary">Mais detalhes</a>
          </div>
        </div>
      )
    })
    
    console.log(reposList)

    return (
      <div>
        {this.state.isLoading ? <Spinner /> : null}
        <h4>{this.state.reposCount} repositórios</h4>
        {reposList}
      </div>
    )
  }
}

export default UserRepos