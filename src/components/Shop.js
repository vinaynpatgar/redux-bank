import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';


const Shop = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators,dispatch);

  return (
    <center>
    <div>
      <h1><u>Money</u></h1>
        <h2><u> Withdraw / Deposit</u></h2>
      <button className="btn btn-primary mx-2" onClick={()=>(actions.withdrawMoney(100))}>-</button>
               Update Balance
      <button className="btn btn-primary mx-2" onClick={()=>(actions.depositMoney(100))}>+</button>
    </div>
    </center>
  );
}

export default Shop;
