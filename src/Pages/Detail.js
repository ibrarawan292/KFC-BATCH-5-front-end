import React from 'react'
import P1 from '../assets/p1.png'
import{ useParams} from 'react-router-dom'
import{ products} from "../data/products";
const Detail = () => {

    const { prod} = useParams();
   const product = products.find(item => item.slug === prod)

    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                   <img src={P1} alt="" />
                </div>
                <div className="col-md-6">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <h3>PKR .{product.price}</h3>
                  <p>Available Qty:{product.stock}</p>
                </div>
            </div>
        </div>
    )
}

export default Detail
