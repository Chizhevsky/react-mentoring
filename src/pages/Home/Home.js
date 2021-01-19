import axios from 'axios'
import React from 'react'
import MainFilm from '../../components/MainFilm/MainFilm'
import './Home.css'

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            topFilm: null,
        }
    }

    async componentDidMount() {
        const { data } = await axios.get('https://my-json-server.typicode.com/Chizhevsky/my-fake-server-for-films/top-film')
        this.setState({topFilm: data})
    }

    render() {
        return (
            <React.Fragment>
                {this.state.topFilm && <MainFilm film={this.state.topFilm} />}
            </React.Fragment>
        )
    }
}

export default Home
