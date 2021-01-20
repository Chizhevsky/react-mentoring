import axios from "axios";
import React from "react";
import MainFilm from "../../components/MainFilm/MainFilm";
import Categories from "../../components/Categories/Categories";
import "./Home.css";

class Home extends React.Component {
  state = {
    topFilm: null,
    categories: null
  }

  async componentDidMount() {
    const topFilmRequest = axios.get(
      "https://my-json-server.typicode.com/Chizhevsky/my-fake-server-for-films/top-film"
    );
    const categoriesRequest = axios.get(
      'https://my-json-server.typicode.com/Chizhevsky/my-fake-server-for-films/categories'
    );
    const [{data : topFilm}, { data : categories}] = await axios.all([topFilmRequest, categoriesRequest])
    this.setState({ topFilm, categories });
  }

  render() {
    return (
      <main className="home-page-main">
        {this.state.topFilm && <MainFilm film={this.state.topFilm} />}
        {this.state.categories?.length > 0 && <Categories categories={this.state.categories} />}
      </main>
    );
  }
}

export default Home;
