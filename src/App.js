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
      auth: null,
      theme
    }
  }

  changeTheme = (theme) => {
    localStorage.setItem('theme', theme)
    this.setState({theme})
  }

  async componentDidMount() {
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
