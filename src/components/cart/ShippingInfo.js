import React, { useState } from 'react';


const ShippingInfo = ({formValues, handleInputChange}) => {

    console.log("ShippingInfo");
    const [sCountry, setSCountry] = useState('United States');

    const handleCountryChange= (event) =>{
        setSCountry(event.target.value);

     }


  return (
    <>
        <div className="row">
                <div className="form-group col-md-12">
                    <br/>
                    <strong className="clearfix">Your Personal Details</strong>
                </div>
                <div className="form-group required col-md-12">
                    <label className="form-control-label" htmlFor="input-payment-email">E-Mail</label>
                    <input name="email" value={formValues?.email} placeholder="E-Mail" onChange={handleInputChange} className="form-control" type="text" readOnly />
                </div>

                <div className="form-group required col-md-6">
                    <label className="form-control-label" htmlFor="input-payment-firstname">First Name</label>
                    <input name="firstName" value={formValues?.firstName} placeholder="First Name" onChange={handleInputChange} className="form-control" type="text" readOnly />
                </div>
                <div className="form-group required col-md-6">
                    <label className="form-control-label" htmlFor="input-payment-lastname">Last Name</label>
                    <input name="lastName" value={formValues?.lastName} placeholder="Last Name" onChange={handleInputChange} className="form-control" type="text" readOnly />
                </div>

                <div className="form-group required  col-md-6">-
                    <label className="form-control-label" htmlFor="input-payment-telephone">Telephone</label>
                    <input name="phone" value={formValues?.phone} placeholder="Telephone" onChange={()=>handleInputChange} className="form-control" type="text" />
                </div>


                <div className="form-group col-md-12">
                    <br/>
                    <strong className="clearfix">Your Shpping Address</strong>
                </div>

                <div className="form-group required col-md-12">
                    <label className="form-control-label" htmlFor="address1">Address 1</label>
                    <input name="address1" value={formValues?.address1} placeholder="Address 1" onChange={handleInputChange} className="form-control" type="text" />
                </div>
                <div className="form-group col-md-12">
                    <label className="form-control-label" htmlFor="address-2">Address 2</label>
                    <input name="address2" value={formValues?.address2}  placeholder="Address 2" onChange={handleInputChange} className="form-control" type="text" />
                </div>
                <div className="form-group required col-md-6">
                    <label className="form-control-label" htmlFor="country">Country</label>
                    <select name="country" value={sCountry} onChange={handleCountryChange} className="form-control custom-select">
                        <option > --- Please Select --- </option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                    </select>
                </div>
                <div className="form-group required col-md-6">
                    <label className="form-control-label" htmlFor="state">Region / State</label>
                    <input name="state" value={formValues?.state} placeholder="Region" onChange={handleInputChange} className="form-control" type="text" />
                </div>
                <div className="form-group required col-md-6">
                    <label className="form-control-label" htmlFor="city">City</label>
                    <input name="city" value={formValues?.city} placeholder="City" onChange={handleInputChange} className="form-control" type="text" />
                </div>
                <div className="form-group required col-md-6">
                    <label className="form-control-label" htmlFor="postalCode">Post Code</label>
                    <input name="postalCode" value={formValues?.postalCode} placeholder="Post Code" onChange={handleInputChange} className="form-control" type="text" />
                </div>
        </div>
    </>
    )
    }

    export default ShippingInfo