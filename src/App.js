import React from "react"
import axios from 'axios'

import Header from "./components/Header/Header.js"
import "./App.css"
import Main from "./components/Main/Main.js"
import { API } from "./constants/constants"
import { defaultTheme, ThemeContext, themes } from './contexts/ThemeContext'
import { AuthContext } from "./contexts/AuthContext.js"
import { withRouter } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props)
    const theme = localStorage.getItem('theme') || defaultTheme
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    const email = localStorage.getItem('email') || null
    this.state = {
      auth: {
        isLoggedIn,
        email
      },
      theme
    }
    this.handleAutorization = this.handleAutorization.bind(this)
  }

  changeTheme = (theme) => {
    localStorage.setItem('theme', theme)
    this.setState({theme})
  }

  async handleAutorization(email, password) {
    const { data: allUsers } = await axios.get(`${API.host}/users`)
    const currentUser = await allUsers.find((user) => user.email === email && user.password === password)
    if (currentUser) {
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('email', email)
      this.setState({auth: {
        isLoggedIn: true,
        email
      }}, () => this.props.history.push('/'))
    } else {
      this.setState({})
    }
  }

  render() {
    const { theme, auth: { isLoggedIn, email } } = this.state
    return (
      <ThemeContext.Provider value={{ theme, changeTheme: this.changeTheme, themes }}>
        <AuthContext.Provider value={{ isLoggedIn, email, handleAutorization: this.handleAutorization }}>
          <div className="app">
              <Header isLoggedIn={isLoggedIn} email={email} />
              <Main />
          </div>
        </AuthContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

export default withRouter(App);
