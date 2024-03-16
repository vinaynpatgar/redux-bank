import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const amount = useSelector(state => state.amount)
  return (
    
  <center>    
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

      <div>
        <u><button disabled={true} className="btn-primary"> <b>Your Balance:{amount}</b></button></u>
      </div>

    </div>
    </center>  

  );
}

export default Navbar;
