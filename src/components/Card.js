
import React from 'react'
import P1 from '../assets/p1.png'
import { Link } from 'react-router-dom'

const Card = (props) => {
   
  // const a = 90
  // // console.log("helo"+ a)
  
  //   console.log(`helo ${a}`)
  return (

          <div className='col-md-4 mb-4'>
            <div className="card" >
        <img src={P1} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.data.title}</h5>
          <p className="card-text">{props.data.description}</p>
          <a href="#" className="btn btn-danger">PKR. {props.data.price}</a>
          <Link to={`/product/${props.data.slug}`} className="btn btn-primary">ADD TO BUCKET</Link>
        </div>
       </div>
        </div>

  )
}

export default Card
