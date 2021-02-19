import React, { Component } from 'react'
import { Rate } from '../../assets/style/index'

export default class rating extends Component {
    render() {
        const {product_rating} = this.props
            let rate = ''
            for (let i = 0; i < product_rating; i++) {
                rate += i
            }
            let lop = rate.split('')
        return (
            <div>
                <div className="rating">
                <div className="d-flex" style={{height: "15px", alignItems: 'center'}}>
                    {lop.map((data) => {
                        return <img src={Rate} alt="" /> 
                    })}
                    <p className="" style={{height: "8px", marginLeft: "5px"}}>({product_rating})</p>
                </div>
                </div>
            </div>
        )
    }
}
