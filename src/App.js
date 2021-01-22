import React from "react"
import axios from 'axios'

import Header from "./components/Header/Header.js"
import "./App.css"
import Main from "./components/Main/Main.js"
import { API } from "./constants/constants"
import { ThemeContext, themes } from './contexts/ThemeContext'

class App extends React.Component {
  constructor(props) {
    super(props)
    const theme = localStorage.getItem('theme')
    this.state = {
      auth: {
        isLoggedIn: false,
        user: null
      },
      theme
    }
  }

  changeTheme = (theme) => {
    localStorage.setItem('theme', theme)
    this.setState({theme})
  }

  async handleAutorization({ email, password }) {
    // const { data: allUsers } = await axios.get(`${API.host}/allUsers`)
    // const currentUser = await allUsers.find((user) => user.email === email && user.password === password)
    // if (!currentUser) {
    //   return false;
    //   return;
    // } else {
      
    //   this.setState({auth: {user: currentUser, isLoggedIn: true}});
    // }
  }

  async componentDidMount() {
    console.log(this.props);
    const { data } = await axios.get(`${API.host}/auth`)
    this.setState({ auth: data })
  }

  render() {
    return (
      <ThemeContext.Provider value={{theme: this.state.theme, changeTheme: this.changeTheme, themes }}>
          <div className="app">
              <Header isLoggedIn={this.state.auth?.isLoggedIn} />
              <Main />
          </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
