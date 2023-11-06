import React, { Component } from 'react';

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
                    }} className='m-2 border rounded w-75'/>
                </div>
            </div>
        );
    }
}

export default SearchBarComponent;