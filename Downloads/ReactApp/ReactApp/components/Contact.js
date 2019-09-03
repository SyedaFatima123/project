import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitForm } from '../actions/submitFormAction';
import { withRouter } from 'react-router-dom';

class Contact extends Component {
    constructor(){
        super();
        this.state = {
            firstname : '',
            firstnameError:"",
            lastname : '',
            lastnameError : 'Last Name is Empty',
            address : '',
            addressError : 'Address  is Empty',
            company : '',
            companyError : 'Company Name is Empty',
            phone : '',
            phoneError : 'Phone Number is Empty',
            date_of_birth : '',
            date_of_birthError : 'DOB is Empty',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name] : e.target.value })
    }

 

    onSubmit(e){
        e.preventDefault();
        const formData = {
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            address : this.state.address,
            company : this.state.company,
            phone : this.state.phone,
            date_of_birth : this.state.date_of_birth
        }
        
       
        this.props.submitForm(formData);
        this.props.history.push('/contact');
    }
    
     
      
    render() {
        return (
            <div>
                
                <div className="form-window">
                    <form onSubmit={this.onSubmit}>
                    <h1 style={{ padding: "10px 50px",textAlign:"center", color: "white",backgroundColor:"green"}}> Form</h1>    
                    <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstname" name="firstname" placeholder="First Name" value={this.state.firstname} onChange={this.onChange} />
                       
                        
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id="lastname" name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.onChange}  />
                       
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" name="address" placeholder="Address" value={this.state.address} onChange={this.onChange} />
                        
                        
                        <label htmlFor="company">Company</label>
                        <input type="text" id="company" name="company" placeholder="Company" value={this.state.company} onChange={this.onChange} />
                        
                        
                        <label htmlFor="phone">Phone</label>
                        <input type="text" id="phone" name="phone" placeholder="Phone Number" value={this.state.phone} onChange={this.onChange} />
                        
                        
                        <label htmlFor="date_of_birth">Date of Birth</label>
                        <input type="date" id="date_of_birth" name="date_of_birth" placeholder="Date of Birth" value={this.state.date_of_birth} onChange={this.onChange}  />
                        
                        
                        <input type="submit" defaultValue="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(null, { submitForm })(Contact));