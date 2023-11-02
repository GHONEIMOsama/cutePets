import React, { Component } from 'react';
import cuteCatImgUrl from '../assets/cuteCat.jpg';

class CardComponent extends Component {
    
    render() {
        return (
            <div className='border rounded shadow'>
                <div className='row'>
                    <div className='col-12'>
                        <img src={this.props.dogData.imgUrl} alt='Dog photo' width='300' height='300' />
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