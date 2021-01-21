import React from "react";
import axios from 'axios'

import Header from "./components/Header/Header.js"
import "./App.css"
import Main from "./components/Main/Main.js"
import { API } from "./constants/constants"

class App extends React.Component {
  state = {
    auth: null,
  }

  async componentDidMount() {
    console.log(this.props)
    const { data } = await axios.get(`${API.host}/auth`)
    this.setState({ auth: data })
  }

  render() {
    return (
      <div>
        <Header isLoggedIn={this.state.auth?.isLoggedIn} />
        <Main />
      </div>
    );
  }
}

export default App;
