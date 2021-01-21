import axios from "axios";
import React, { Component } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { API } from "../../constants/constants";
import "./ViewMode.css";

export default class ViewMode extends Component {
  state = {
    currentPicture: null,
  };

  async componentDidMount() {
    const id = this.props.match?.params?.id;
    if (id) {
      const {data: allPictures } = await axios.get(`${API.host}/allPictures`)
      const currentPicture = allPictures.find((picture) => picture.id === id);
      currentPicture && this.setState({currentPicture})
    }
  }

  render() {
    return (
      this.state.currentPicture && (
        <main className="view-mode">
          <button
            className="view-mode__back-button"
            onClick={() => this.props.history.goBack()}
          >{`< Back`}</button>
          <div className="view-mode__video-player">
            <VideoPlayer
              width={"1000px"}
              height={"500px"}
              source={this.state.currentPicture.source}
            />
          </div>
          <h1>{this.state.currentPicture.name}</h1>
          <p>{this.state.currentPicture.description}</p>
        </main>
      )
    );
  }
}
