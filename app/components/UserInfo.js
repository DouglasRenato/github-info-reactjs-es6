import React, { Component } from 'react'
import { Container, Card, CardTitle, CardImg, CardText, CardBody, Button, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faInfo, faSmile } from '@fortawesome/free-solid-svg-icons'

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
          <Container>
           <Row>
              <Col md="4" style={css_fixedSelf}>
              {this.state.isLoading ? <Spinner /> : null}
                <Card 
                  className="text-center border-dark shadow-sm" 
                  style={{marginBottom: '1.5rem'}}
                >
                  <div style={{padding: '1em'}}>
                    <CardImg top className="rounded-circle" 
                      src={user.avatar_url} 
                      alt={user.name}
                    />
                  </div>
                  <CardBody style={{background: '#eee'}}>
                    <CardTitle>{user.name}</CardTitle>
                    <CardText>{user.bio}</CardText>
                    <hr />
                    <CardText className="text-left" style={{margin: '0'}}>
                      <small className="text-muted">
                        <FontAwesomeIcon icon={faUser}/>
                        {` ${user.login}`}
                      </small>
                    </CardText>
                    <CardText className="text-left" style={{margin: '0'}}>
                      <small className="text-muted">Seguidores: {user.followers} </small>
                      | 
                      <small className="text-muted"> Seguindo: {user.following}</small>
                    </CardText>
                    <a href={user.html_url} 
                      target="_blank" 
                      className="btn btn-lg btn-outline-info col-md-12"
                      style={{marginTop: '1.5em'}}>Ver mais
                    </a>
                  </CardBody>
                </Card>
              </Col>

              <Col md="8">
                <UserRepos repos={repos}/>
              </Col>
            </Row>
          </Container>
        ) : 
        (
          <Container className="text-center">
            <h5 style={{color: '#aaa', height: '25vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
              <FontAwesomeIcon icon={faInfo} style={{margin: '1em', fontSize: '1.9em'}}/>
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                Tente uma ou outra busca! 
                <FontAwesomeIcon icon={faSmile} style={{margin: '0 0 0 .3em'}}/>
              </div>
            </h5>
          </Container>
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