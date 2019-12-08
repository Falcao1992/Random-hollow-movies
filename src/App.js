import React, { Component } from 'react'; 
import SearchBar from './components/SearchBar/SearchBar';
import axios from 'axios'
import VideoDetail from './components/VideoDetail/VideoDetail'
import VideoList from './components/VideoList/VideoList'
import MosaiqueMovies from './components/MosaiqueMovies';
import './App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            videos: [],
            selectedVideo: null,
            movies: [],
            value : ''
        }
    }

    async getMovies() {
      const res = await axios.get(
        "https://hackathon-wild-hackoween.herokuapp.com/movies"
      );
      this.setState({ movies: res.data.movies });
    }

    componentDidMount() {
      this.getMovies();
    }

    handleSubmit = async (valueFromSearchBar) => {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                 q: valueFromSearchBar,
                 part: 'snippet',
                 key : 'AIzaSyAI8fLXFV5Q4IfMxDx7_ZNh3sixgXZI5sA',
                 maxResults: 3

            }
         })
        this.setState({
            videos: response.data.items
        })
    };

    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    handleChange = event => {
        this.setState({
          inputText: this.state.value
        });
    }
    handleOnClick = (e) => {
        const value = `${e.currentTarget.alt.replace("_"," ")} bande annonce`;
        this.setState({ value });
        this.handleSubmit(value);
     }

    render() {
      const {movies, value} = this.state
        return (
          <div className="App">
                <SearchBar handleFormSubmit={this.handleSubmit} handleChange={value => this.setState({ value })} value={value} />
                <div>
                    <div>
                        <div id="topApp" className="App__VideoDetail">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div>
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                        <div>
                            <MosaiqueMovies movies={movies} value={value} handleOnClick={this.handleOnClick}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App