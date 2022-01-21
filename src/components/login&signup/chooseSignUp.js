import React from 'react';
import  {useHistory}  from "react-router-dom";

function ChooseSignUp() {

    const history = useHistory();

    function customerRegestation(){
        history.push('/cus-Registation');
    }
    
    function sellerRegestation(){
        history.push('/sell-Registation');
    }

    return (

        <div className='SignUpInArea'>
            <h3>Create a New account</h3>
            <div className="d-grid gap-2">
                <button type="submit" onClick={sellerRegestation} className='bg-light' size="lg">SELLER</button>
                <br/>
                <button type="submit" onClick={customerRegestation} className='bg-light' size="lg">BYER </button>
            </div>
            <span className="signUpHelp">
                <a href='/sign-up-#'>Help</a>
            </span>
        </div>
    );
}

export default ChooseSignUp;
