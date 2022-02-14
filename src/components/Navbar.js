
import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/collection/everyday-value'>Everyday Value</Link>
        </li>  
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/collection/make-it-a-deal'>Make It A Meal</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/collection/signature-box'>Signature Box</Link>
        </li>      
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/collection/sharing'>Sharing</Link>
        </li>  
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/collection/promotions'>Promotions</Link>
        </li>  
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/collection/snacks'>Snacks</Link>
        </li>  
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/collection/midnight-deals'>MIDNIGHT DEALS</Link>
        </li> 
      </ul>   
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
