import React, { Component, useState } from 'react';
import SearchBarComponent from './SearchBar';
import CardComponent from './Card';
import { fetchAllData, fetchImageData } from '../services/petsApi.js';

class AlbumComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dogsData: [],
            searchValue: ''
        };
    }

    componentDidMount() {
        fetchAllData().then(allDataResJson => {
            
            // The commented bloc below was written because I was trying to fetch all the data from the data base, then send a request for each
            // object to get the dog image. But I was getting CORS problems. Then I found an easier way to fetch the dogs data + his image. 
            // But I will leave this bloc to show how I tried to send several requests in a then bloc.

            /* Promise.all(allDataResJson.map(res => fetchImageData(res.id))).then(results => {
                const imgsUrls = results.map(res => res.json().url);
                for(let i = 0; imgsUrls.length; i++) {
                    dogsDataFinalObjects[i].imgUrl = imgsUrls[i];
                }
            }).catch(err => {
                console.error('Fetch Image Data error : ', err);
            }).finally(() => {
                this.setState({dogsData: dogsDataFinalObjects});
                console.log(this.state.dogsData);
            }) */

            this.setState({dogsData: allDataResJson.map(res => {
                return {
                    id: res.id,
                    name: res.breeds[0].name,
                    description: res.breeds[0].temperament,
                    imgUrl: res.url
                };
            })});
        }).catch(err => {
            console.error('Fetch all data error : ', err);
        });
    }

    searchValueHandler = (searchValue) => {
        this.setState({searchValue: searchValue});
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col'>
                        <SearchBarComponent searchValueHander={this.searchValueHandler}/>
                    </div>
                </div>
                <div className='row'>
                    {this.state.dogsData.filter(dogData => this.state.searchValue === '' || dogData.name.startsWith(this.state.searchValue)).map(dogData => (
                        <div className='col-3 mb-3'>
                            <CardComponent dogData={dogData}/>
                        </div>
                    ))}         
                </div>
            </div> 
        );
    }
}

export default AlbumComponent;