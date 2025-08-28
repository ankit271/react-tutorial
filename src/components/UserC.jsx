import React, { useContext } from 'react'
import { UserContext } from "../App";

function UserC() {

  const context = useContext(UserContext);  

  return <h1>{context.message}, User C</h1>;
}

export default UserC