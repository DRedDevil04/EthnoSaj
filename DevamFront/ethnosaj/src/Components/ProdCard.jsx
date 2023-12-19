import React from 'react'

const ProdCard = () => {
  return (
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{productName}</h5>
    <p class="card-text">{productDescription}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{productPrice}</li>
    <li class="list-group-item">{productRentalP}</li>
    <li class="list-group-item">{productCategory}</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
  )
}

export default ProdCard;