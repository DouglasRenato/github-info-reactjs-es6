var React = require('react')

var SearchUser = require('./SearchUser')
var UserInfo = require('./UserInfo')
var Footer = require('./Footer')

var GitHub = React.createClass({
  getInitialState: function () {
    return {
      user: null, 
      repos: []
    }
  },
  
  updateUser: function (user) {
    this.setState({user: user})
  },

  updateRepos: function (repos) {
    this.setState({repos: repos})
  },

  render: function () {
    return (
      <div style={{paddingBottom: '1.7rem'}}>
        <SearchUser 
          updateUser={this.updateUser}
          updateRepos={this.updateRepos}
        />
        <UserInfo 
          user={this.state.user}
          repos={this.state.repos}
        />
        <Footer />
      </div>
    )
  }
})

module.exports = GitHub