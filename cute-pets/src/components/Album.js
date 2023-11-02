import React, { Component, useState } from 'react';
import SearchBarComponent from './SearchBar';
import CardComponent from './Card';
import { pets } from '../services/petsApi.js';
import { fetchAllData, fetchImageData } from '../services/petsApi.js';

class AlbumComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dogsData: []
        };
    }

    componentDidMount() {
        fetchAllData().then(allDataResJson => {
            const dogsDataFinalObjects = allDataResJson.map(res => {
                return {
                    name: res.name,
                    description: res.temperament
                };
            })
            Promise.all(allDataResJson.map(res => fetchImageData(res.id))).then(results => {
                const imgsUrls = results.map(res => res.json().url);
                for(let i = 0; imgsUrls.length; i++) {
                    dogsDataFinalObjects[i].imgUrl = imgsUrls[i];
                }
            }).catch(err => {
                console.error('Fetch Image Data error : ', err);
            }).finally(() => {
                this.setState({dogsData: dogsDataFinalObjects});
                console.log(this.state.dogsData);
            })
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
                    {this.state.dogsData.map(dogData => (
                        <div className='col-3'>
                            <CardComponent dogData={dogData}/>
                        </div>
                    ))}         
                </div>
            </div> 
        );
    }
}

export default AlbumComponent;