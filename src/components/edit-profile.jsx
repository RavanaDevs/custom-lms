/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import './edit-profile.css'; // Custom styles

const EditProfile = () => {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const username = useRef();
  const addressLine1 = useRef();
  const addressLine2 = useRef();
  const profileImage = useRef();
  const mobileNumber = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              ref={firstName}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              ref={lastName}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              ref={email}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              ref={username}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="addressLine1">Address Line 1</label>
          <input
            type="text"
            className="form-control"
            id="addressLine1"
            ref={addressLine1}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="addressLine2">Address Line 2</label>
          <input
            type="text"
            className="form-control"
            id="addressLine2"
            ref={addressLine2}
          />
        </div>
        <div className="form-group">
          <label htmlFor="profileImage">Profile Image</label>
          <input
            type="file"
            className="form-control-file"
            id="profileImage"
            ref={profileImage}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="tel"
            className="form-control"
            id="mobileNumber"
            ref={mobileNumber}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
