import axios from "axios";
import React from "react";
import MainFilm from "../../components/MainFilm/MainFilm";
import Categories from "../../components/Categories/Categories";
import "./Home.css";
import { API } from "../../constants/constants";
import { ThemeContext } from "../../contexts/ThemeContext";

class Home extends React.Component {
  state = {
    topFilm: null,
    categories: null,
  };

  async componentDidMount() {
    const topFilmRequest = axios.get(`${API.host}/top-film`);
    const categoriesRequest = axios.get(`${API.host}/categories`);

    const [{ data: topFilm }, { data: categories }] = await axios.all([
      topFilmRequest,
      categoriesRequest,
    ]);

    this.setState({ topFilm, categories });
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {
          ({theme, themes}) => {
            const { color } = themes[theme];
            return (
              <main className="home-page-main" style={{color: color}}>
                {this.state.topFilm && <MainFilm film={this.state.topFilm} />}
                {this.state.categories?.length > 0 && (
                  <Categories categories={this.state.categories} />
                )}
              </main>
            )
          }
        }
      </ThemeContext.Consumer>
      
    );
  }
}

export default Home;
