import React from "react"
import './Settings.css'

class Settings extends React.Component {
  state = {
    theme: this.props.theme
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.changeTheme(this.state.theme)
  }

  handleChange = (e) => {
    this.setState({theme: e.target.value})
  }

  render() {
    return (
      <main className="settings">
        <h3>Settings</h3>
        <form onSubmit={this.handleSubmit}>
          <label className="settings__form-label">
            <h4>Choose theme:</h4>
            <select className="settings__input" name="theme" value={this.state.theme} onChange={this.handleChange}>
              <option value="primary">primary</option>
              <option value="secondary">secondary</option>
            </select>
          </label>
          <input type="submit" value="Save" />
        </form>
      </main>
    );
  }
}

export default Settings
