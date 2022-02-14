
import React from 'react'
import footerLogo from '../assets/footer-logo.png'
import googlplay from '../assets/google-play.png'
import appStore from '../assets/app-store.png'

const Footer = () => {
  return (
    <div>
      <div className="Footer mt-4">
        <hr/>
        <div className="upper-footer mb-4">
        <img src={footerLogo} alt="" />
        </div>
        <div className="lower-footer">
         <ul>
           <li><h5>Information</h5></li>
           <li><a href="#">Lorem, ipsum dolor.</a></li>
           <li><a href="#">Lorem, ipsum dolor.</a></li>
           <li><a href="#">Lorem, ipsum dolor.</a></li>
           <li><a href="#">Career</a></li>
         </ul>
         <ul>
           <li><h5>Food</h5></li>
           <li><a href="#">Lorem, ipsum dolor.</a></li>
          
         </ul>
         <ul>
           <li><h5>Location</h5></li>
           <li><a href="#">Lorem, ipsum dolor.</a></li>
           
         </ul>
         <ul>
           <li><h5>Getin Touch</h5></li>
           <li><a href="#">Lorem, ipsum dolor.</a></li>
           <li><a href="#">Lorem, ipsum dolor.</a></li>
           <li><a href="#">Lorem, ipsum dolor.</a></li>
          
         </ul>
         <ul>
           <li><a href="#"><img src={googlplay} alt="" /></a></li>
           <li><a href="#"><img src={appStore} alt="" /></a></li>
         </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
