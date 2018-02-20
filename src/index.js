import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCR9zTn-b40n7r-y3nzx58ee2HZ4uwv2mE';

YTSearch({ key: API_KEY, term: 'sea'}, function(data){
  console.log(data);
});

ReactDOM.render(
  
  <SearchBar />
  
  , document.querySelector('.container'));
