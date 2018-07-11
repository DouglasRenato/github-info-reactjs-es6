import React, { Component } from 'react'
import {Card, CardTitle, CardBody, CardText, Badge } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

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
        <Card key={key} className="shadow-sm" style={{marginBottom: '1em'}}>
          <CardBody>
            <CardTitle className="float-left">{repo.name}</CardTitle>
            <span className="float-right">
              <Badge color="secondary">
                <FontAwesomeIcon icon={faStar} className="mr-1" style={{color: '#fff', marginBottom: '1.7px'}}/>
                {repo.stargazers_count}
              </Badge>
            </span>
            <br /> <br />
            <CardText>{repo.description}</CardText>
            <a href={repo.html_url} target="_blank" className="btn btn-sm btn-outline-secondary">Mais detalhes</a>
          </CardBody>
        </Card>
      )
    })
    
    console.log('repos ===> ', reposList)

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