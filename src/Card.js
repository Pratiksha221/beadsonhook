import React from 'react'
import  '../node_modules/bootstrap/dist/css/bootstrap.css'
import './card.css'
function Card() {
    return (
        <div>
            <div className="card" >
            <img className="card-img-top" src="https://picsum.photos/200/300" />
  <div className="card-body">
    <h5 className="card-title">Earring</h5>
    <p className="card-text">Description</p>
  </div>
  
  <div className="card-body row">
    <a href="#" className="card-link col-6">Add to Cart</a>
    <a href="#" className="card-link col-6">Buy Now</a>
  </div>
</div>
        </div>
    )
}

export default Card
