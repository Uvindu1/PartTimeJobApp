import React from 'react';

function CustomerRegistation() {
    return (
    
        <form>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>First name</label>
                <input
                    type="textfirst"
                    //type="text" 
                    className="form-control"
                    name="firstname"
                    placeholder="Enter your first name"
                // value={firstname}

                />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="textfirst"
                    //type="text"  
                    className="form-control"
                    name="lastname"
                    placeholder="Enter your last name"
                // value={lastname}

                />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="emaila"
                    //type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter your email address"
                // value={email}

                />

            </div>

            <div className="form-group">
                <label>Address</label>
                <input type="address"
                    //type="text"
                    className="form-control"
                    name="address"
                    placeholder="Enter your address"

                />

            </div>

            <div className="form-group">
                <label>City</label>
                <input type="city"
                    //type="text"
                    className="form-control"
                    name="city"
                    placeholder="Enter your city name"


                />

            </div>

            <div className="form-group">
                <label>Country</label>
                <input type="country"
                    //type="text"
                    className="form-control"
                    name="country"
                    placeholder="Enter your country name"

                />

            </div>

            <div className="form-group">
                <label>User name</label>
                <input type="textuser"
                    //type="text"
                    className="form-control"
                    name="username"
                    placeholder="Enter your user name"
                //  value={username}

                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter your password"
                //  value={password}

                />
            </div>
        </form>
            
    );
}

export default CustomerRegistation;
