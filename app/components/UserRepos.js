var React = require('react')

var Spinner = require('./Spinner')

var UserRepos = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      reposCount: 0
    }
  },

  // Component LifeCycle
  componentWillReceiveProps: function (props) {
    this.setState({reposCount: props.repos.length})
  },
  // Component LifeCycle
  componentDidMount: function () {
    this.setState({isLoading: false})
  },

  render: function () {
    var repos = this.props.repos.map(function (repo, key) {
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
    
    console.log(repos)

    return (
      this.state.isLoading ? 
        <Spinner /> :
        <div>
          <h4>{this.state.reposCount} repositórios</h4>
          {repos}
        </div>
    )
  }
})

module.exports = UserRepos