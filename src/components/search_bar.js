import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: 'hello man' }
    }

    render(){
        return (
            <div>
                <input
                    className="search-bar" 
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} 
                />
                
            </div>
        );
    }

    
}

export default SearchBar;