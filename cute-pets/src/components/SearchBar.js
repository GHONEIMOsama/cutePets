import React, { Component } from 'react';
import '../styles/SearchBar.css';

class SearchBarComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        };
    }

    render() {
        return (
            <div className='row'>
                <div className='col'>
                    <input placeholder='Search your pet by name' value={this.state.searchValue} onChange={(event) => {
                        this.setState({searchValue: event.target.value});
                        this.props.searchValueHander(event.target.value);
                    }} className='m-2 border w-25 h-75 br-30 p-2'/>
                </div>
            </div>
        );
    }
}

export default SearchBarComponent;