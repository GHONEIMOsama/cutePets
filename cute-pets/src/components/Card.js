import React, { Component } from 'react';
import '../styles/Card.css';

class CardComponent extends Component {
    
    render() {
        return (
            <div className='border rounded shadow bg-white expand-on-hover'>
                <div className='row'>
                    <div className='col-12'>
                        <img src={this.props.dogData.imgUrl} alt='Dog photo' className='w-100 h-100' />
                    </div>
                    <div className='pleft-5'>
                        <div className='col-12'>
                            <h4>{this.props.dogData.name}</h4>
                        </div>
                        <div className='col-12'>
                            {this.props.dogData.description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardComponent;