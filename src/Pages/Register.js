import React,{useState} from 'react';

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [Address1, setAddress1] = useState('')
  const [Address2, setAddress2] = useState('')
  const [City, setCity] = useState('')
   
   const handleEmailchange = (event) => {
      setEmail(event.target.value)
   }

   const handlePasswordchange = (event) => {
    setPassword(event.target.value)
   }
   const handleAddress1change = (event) => {
    setAddress1(event.target.value)
   }
   const handleAddress2change = (event) => {
    setAddress2(event.target.value)
   }
   const handleCitychange = (event) => {
    setCity(event.target.value)
   }

  const handleSubmitchange = (e) => {
    e.preventDefault()
     if (email === ''){
       console.log('please enter your email')
       return
     }
     if (password === ''){
       console.log('please enter your password')
       return
     }
     if (Address1 === ''){
      console.log('please enter your address1')
      return
    }
    if (Address2 === ''){
      console.log('please enter your address2')
      return
    }
    if (City === ''){
      console.log('please enter your city')
      return
    }

     console.log(email, password, Address1, Address2, City)
}
  return ( 
      <div>
          <form class="row g-3 w-50" onSubmit={handleSubmitchange}>
  <div class="col-md-6">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" onChange={handleEmailchange}/>
    <p>{email}</p>
  </div>
  <div class="col-md-6">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password"  onChange={handlePasswordchange} />
  </div>
  <div class="col-12">
    <label for="Address1" class="form-label">Address</label>
    <input type="Address1" class="form-control" id="Address1" placeholder="1234 Main St" onChange={handleAddress1change}/>
  </div>
  <div class="col-12">
    <label for="Address2" class="form-label">Address 2</label>
    <input type="teAddress2xt" class="form-control" id="Address2" placeholder="Apartment, studio, or floor" onChange={handleAddress2change}/>
  </div>
  <div class="col-md-6">
    <label for="City" class="form-label">City</label>
    <input type="City" class="form-control" id="City" onChange={handleCitychange}/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
      </div>

  )
    
};

export default Register;
