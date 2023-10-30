import React, { Component } from 'react';
import SearchBarComponent from './SearchBar';
import CardComponent from './Card';

class AlbumComponent extends Component {
    
    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col'>
                        <SearchBarComponent />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <CardComponent />
                    </div>
                </div>
            </div> 
        );
    }
}

export default AlbumComponent;