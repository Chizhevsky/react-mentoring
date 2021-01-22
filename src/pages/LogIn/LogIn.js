import React from "react"
import './LogIn.css'

class LogIn extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleInputChange = (e) => {
    const { target: { name, value }} = e
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // const { email, password } = this.state
    // const { data: allUsers } = await axios.get(`${API.host}/allUsers`)
    // const currentUser = await allUsers.find((user) => user.email === email && user.password === password)
    // if (!currentUser) {
      // return false;
    // } else {
      // redirection to Home
      // this.setState({auth: {user: currentUser, isLoggedIn: true}});
    // }
  }

  render() {
    return(
      <main className="login">
        <h3>Login</h3>
        <form className="login__form" onSubmit={this.handleSubmit}>
          <label>
            <h4>Email:</h4>
            <input name="text" type="email" value={this.state.email} onChange={this.handleInputChange} />
          </label>
          <label>
            <h4>Password</h4>
            <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
          </label>
          <input className="login__submit" type="submit" value="LogIn" />
        </form>
      </main>
    )
  }
}

export default LogIn
