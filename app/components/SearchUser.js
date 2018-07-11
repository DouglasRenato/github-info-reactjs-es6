import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Jumbotron, Container, Button, FormGroup, Form, Label, Input } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'

import GitHubUser from '../services/GitHubUser'

class SearchUser extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit(e) {
    e.preventDefault()

    // envia dados vazios para limpar o state atual 
    // e ficar 'limpo' para o novo state (ou nunhum caso gere um erro ou não encontre user na busca)
    this.props.updateUser(null)
    this.props.updateRepos([])

    console.log('ReactDOM.findDOMNode(this.inputUsername) ===> ', ReactDOM.findDOMNode(this.inputUsername))
    GitHubUser.getByUsername(ReactDOM.findDOMNode(this.inputUsername).value)
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

    GitHubUser.getReposByUsername(ReactDOM.findDOMNode(this.inputUsername).value)
      .then((response) => {
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
      <Jumbotron fluid="true" style={{marginBottom: '1.5rem', boxShadow: '-5px 0 15px #aaa'}}>
        <Container>
          <h1 className="display-1">
            GitHub Info
          </h1>
          <h3 className="lead">
            Liste informações de um usuário especifico do GitHub!
          </h3>

          <Form onSubmit={this.handleSubmit} style={{marginTop: '2.5rem'}}>
            <FormGroup>
              <Label for="exampleInputEmail1">
                <FontAwesomeIcon icon={faUser}/>
                {' Username'}
              </Label>
              
              {/* 
                Maneira de referenciar um component, já que o 'ref="name" está deprecido'
                (a palavra 'component' poderia ser qualquer outra.)
              */}
              <Input 
                type="text" 
                className="form-control form-control-lg"
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Ex.: douglasrenato"
                ref={component => { this.inputUsername = component }}
              />
              {/* 
              e obter dessa meneira, onde desejar (nesse caso obtem o valor do input)...
                ReactDOM.findDOMNode(this.inputUsername).value 
              */}

              {/*
                Caso fosse uma tag html, poderia referenciar desta maneira...
                (a palavra 'node' poderia ser qualquer outra.)
                <input  
                  type="text" 
                  className="form-control form-control-lg"
                  id="exampleInputEmail1" 
                  aria-describedby="emailHelp" 
                  placeholder="Ex.: douglasrenato"
                  ref={node => { this.inputUsername = node }}
                /> 
              */}
            </FormGroup>
            <Button 
              color="primary"
              size="lg" 
              type="submit" 
              className="col-md-2"
            >
              <FontAwesomeIcon icon={faSearch}/>
              {' Buscar'}
            </Button>
          </Form> 
        </Container>
      </Jumbotron>
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