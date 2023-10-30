import React, { Component } from 'react';
import SearchBarComponent from './SearchBar';
import CardComponent from './Card';
import { pets } from '../services/petsApi.js';

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
                    {pets.map(pet => (
                        <div className='col'>
                            <CardComponent pet={pet}/>
                        </div>
                    ))}         
                </div>
            </div> 
        );
    }
}

export default AlbumComponent;