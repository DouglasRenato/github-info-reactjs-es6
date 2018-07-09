import React, {Component} from 'react'

import SearchUser from './SearchUser'
import UserInfo from './UserInfo'
import Footer from './Footer'
import HideConsoleLog from './HideConsoleLog'

class GitHub extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null, 
      repos: []
    }
    this.updateUser = this.updateUser.bind(this) // bind dos metodos no construtor é melhor performático
    this.updateRepos =this.updateRepos.bind(this)
  }
 
  updateUser(user) {
    this.setState({user: user})
  }

  updateRepos(repos) {
    this.setState({repos: repos})
  }

  render() {
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
        <HideConsoleLog />
      </div>
    )
  }
}

export default GitHub