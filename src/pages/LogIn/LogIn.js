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
    const { email, password } = this.state
    this.props.handleAutorization(email, password);
  }

  render() {
    return(
      <main className="login">
        <h3>Login</h3>
        <form className="login__form" onSubmit={this.handleSubmit}>
          <label>
            <h4>Email:</h4>
            <input name="email" type="email" value={this.state.email} onChange={this.handleInputChange} />
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
