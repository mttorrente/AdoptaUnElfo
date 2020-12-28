import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Spinner } from "react-bootstrap"

//Components
import Navigation from './layout/Navigation/Navigation'
import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Footer from './layout/Footer/Footer'
import HomeList from './pages/Homes-list/Home-list'
import HomeDetails from './pages/Home-details/Home-details'
import UserList from './pages/Users-list/Users-list'
import UserDetails from './pages/User-details/User.details'
import Profile from './pages/Profile/Profile'


import AuthService from '.././service/auth.service'

class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedUser: undefined,
      backResponse: false
    }
     this.authService = new AuthService()
  }

  componentDidMount = () => {

    this.authService   
      .isLoggedIn()
      .then(response => this.setUser(response.data))
      .catch(err => this.setUser(undefined))
  }

  setUser = user => this.setState({ loggedUser: user, backResponse: true}, () => console.log('El nuevo estado de App es', this.state))


  render() {
    return (
      
      <>
        <Route path="/" render={props => <Navigation expandUser={this.setUser} logged={this.state.loggedUser} {...props} />}/>
        <main>
          
          <Switch>
            <Route path="/" exact render={() => <Home />}></Route>
            <Route path="/inicio-sesion" render={props => <Login expandUser={this.setUser} {...props} />}></Route>
            <Route path="/registro" render={props => <Signup expandUser={this.setUser} {...props}/>}></Route>
            <Route path="/lista-casas" render={() => <HomeList />}></Route>
            <Route path="/lista-huespedes" exact render={() => <UserList />}></Route>
            <Route path="/detalles-huespedes/:id" exact render={props => <UserDetails {...props} />}></Route>
            {this.state.loggedUser ?
              <>
              <Route path="/detalles-casas/:id" exact render={props => <HomeDetails expandUser={this.setUser} logged={this.state.loggedUser} {...props} />}></Route>
              <Route path="/perfil" render={props => <Profile expandUser={this.setUser} {...props} logged={this.state.loggedUser} />}></Route>
              </>
              :
              <Spinner />
            }
            
            {/* <Route path="/perfil" render={props => this.state.loggedUser ? <Profile expandUser={this.setUser} {...props}/> : <Redirect to="/inicio-sesion" />} /> */}
          </Switch>
        </main> 
        
        <Footer />
      </>
    )
  }
}
export default App
