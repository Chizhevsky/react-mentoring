import React from "react";
import axios from 'axios'

import Header from "./components/Header/Header.js";
import "./App.css";
import Main from "./components/Main/Main.js";

class App extends React.Component {
  state = {
    auth: null,
  }

  async componentDidMount() {
    const { data } = await axios.get('https://my-json-server.typicode.com/Chizhevsky/my-fake-server-for-films/auth')
    this.setState({ auth: data });
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
