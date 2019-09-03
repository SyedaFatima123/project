import React from 'react';
import { connect } from 'react-redux';

function Message({ form }) {
    return (
        <div>
            <div className="success">You have successfully submitted form!</div>
            
            <h4>First Name:</h4> <span>{form.submitted_data && form.submitted_data.firstname}</span>
                <br /><br />
            
            <h4>Last Name:</h4> {form.submitted_data && form.submitted_data.lastname}
                <br /><br />

            <h4>Company:</h4> {form.submitted_data && form.submitted_data.company}
                <br /><br />

            <h4>Address:</h4> {form.submitted_data && form.submitted_data.address}
                <br /><br />

            <h4>Phone:</h4> {form.submitted_data && form.submitted_data.phone}
                <br /><br />

            <h4>Date of Birth:</h4> {form.submitted_data && form.submitted_data.date_of_birth}
                <br /><br />         
        </div>
    )
}

const mapStateToProps = state => ({
    form : state.form
});

export default connect(mapStateToProps, null)(Message);
