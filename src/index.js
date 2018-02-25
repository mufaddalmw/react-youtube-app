import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list.js';

const API_KEY = 'AIzaSyCR9zTn-b40n7r-y3nzx58ee2HZ4uwv2mE';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
    YTSearch({ key: API_KEY, term: "dubai" }, (videos) => {
      this.setState({ videos })
    });
  }

  

render(){
  return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
};

ReactDOM.render(
  <App />
  , document.querySelector('.container'));
