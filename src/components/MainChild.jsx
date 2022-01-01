import React from 'react'

function MainChild({item}) {
    return (
        <div>
            <div className="img-cart">
                <img src={item.image} alt="img" />
                <span>{item.title.substring(0,10)}</span>
                <i>{item.description.substring(0, 12)}</i>
                <span>Category: {item.category}</span>
                <div className="img-footer">
                    <span>{item.price}$</span>
                    <span>{item.rating.rate}*</span>
                    <span>Stock:{item.rating.count}</span>
                </div>
            </div>
        </div>
    )
}

export default MainChild
