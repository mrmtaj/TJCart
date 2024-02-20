import React, {useState} from 'react'

const Register = () => {

    const [state, setState] = useState({});

    const handleInputChange = (e)=>{
        const target= e.target;
        const value = target.type ==='checkbox'? target.checked : target.value;
        const name = target.name;
        setState({
            ...state,
            [name]: value
        });
    }

    const handleSignUp=(event)=>{
             event.preventDefault();
			
			 fetch('https://dummyjson.com/users/add', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
				  firstName: state.firstName,
				  lastName:  state.firstName,
				  email: state.email,
				  password: state.password
				})
			  })
			  .then(res => res.json())
			  .then(console.log);
    }


  return (
    <>

      <h3>Register</h3>
      <div className="thickline mb-3"></div>
      
					  <form onSubmit={handleSignUp}>
						<div className="form-group row">
						  <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name</label>
						  <div className="col-sm-10">
							<input type="text" name="firstName" className="form-control" id="firstName" onChange={handleInputChange} required/>
						  </div>
						</div>
                        <div className="form-group row">
						  <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</label>
						  <div className="col-sm-10">
							<input type="text" name="lastName" className="form-control" id="lastName" onChange={handleInputChange} required="yes" />
						  </div>
						</div>

                        <div className="form-group row">
						  <label htmlFor="inputEmail2" className="col-sm-2 col-form-label">Email</label>
						  <div className="col-sm-10">
							<input type="email" name="email" className="form-control" id="email" onChange={handleInputChange} required="yes"  />
						  </div>
						</div>
						<div className="form-group row">
						  <label htmlFor="inputPassword2" className="col-sm-2 col-form-label">Password</label>
						  <div className="col-sm-10">
							<input type="password"  name="password"  className="form-control" id="password"  onChange={handleInputChange} required="yes" autoComplete="on" />
						  </div>
						</div>
						<div className="form-group row">
						  <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Confirm password</label>
						  <div className="col-sm-10">
							<input type="password"  name="cofirmPassword" className="form-control" id="confirmPassword" onChange={handleInputChange} required="yes" autoComplete="on" /> 
						  </div>
						</div>
						
						<div className="form-group row">
						  <div className="offset-sm-2 col-sm-10">
							<button type="submit" className="btn btn-primary">Create account</button>
						  </div>
						</div>						
					  </form>
		  </>
  )
}

export default Register
