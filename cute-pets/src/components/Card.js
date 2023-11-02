import React, { Component } from 'react';
import cuteCatImgUrl from '../assets/cuteCat.jpg';

class CardComponent extends Component {
    
    render() {
        return (
            <div className='border rounded shadow'>
                <div className='row'>
                    <div className='col-12'>
                        <img src='../assets/cuteCat.jpg' alt='Dog photo' />
                    </div>
                    <div className='col-12'>
                        <h4>{this.props.dogData.name}</h4>
                    </div>
                    <div className='col-12'>
                        {this.props.dogData.description}
                    </div>
                </div>
            </div>
        );
    }
}

export default CardComponent;