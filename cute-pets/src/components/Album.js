import React, { Component, useState } from 'react';
import SearchBarComponent from './SearchBar';
import CardComponent from './Card';
import { pets } from '../services/petsApi.js';
import { fetchAllData } from '../services/petsApi.js';

class AlbumComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            dogsData: []
        };
    }

    componentDidMount() {
        fetchAllData().then(resJson => {
            this.setState({dogsData: resJson});
        }).catch(err => {
            console.error('Fetch all data error : ', err);
        });
    }

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