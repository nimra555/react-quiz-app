import React, { useState } from "react";
import Questionaire from './Questionaire';

function UserGreeting(props) {
  const [back,setBack] = useState(<Questionaire/>)
  return (
    <div>
      {props.score > 1 ? (
        <h2 className="fail">You are fail!</h2>
      ) : (
        <h2 className="userGreeting">Thank you for completing questionaire!</h2>
      )}
      <button onClick={() => back}>back to quiz</button>
     </div>
  );
}

export default UserGreeting;
