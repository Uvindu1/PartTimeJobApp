import React from 'react';
import  {useHistory}  from "react-router-dom";

function LoginSideViwe() {

  const history = useHistory();

  function customerRegestation(){
      history.push('/cus-Registation');
  }
  
  function sellerRegestation(){
      history.push('/sell-Registation');
  }

  return (
        <div className='loginSideArea'>
            <h2>Don't have an account?</h2>
            <span>Create a New account</span>
            <div className="d-grid gap-2">
  <button type="submit" onClick={sellerRegestation} className='bg-light' size="lg">SELLER</button>{' '}
  <button type="submit" onClick={customerRegestation} className='bg-light' variant="primary" size="lg">BYER </button>
</div>

        

        </div>
  )
}

export default LoginSideViwe;
