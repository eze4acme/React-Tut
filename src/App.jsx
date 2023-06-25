import React, { useState, useEffect } from "react";
// import items from "./data";
import "./App.css";

    function App() {
      // const url = "https://api.github.com/users";
      const url = "https://catfact.ninja/fact";
      const [users, setUsers] = useState([])
      const getUsers = async () =>{
        const response = await fetch(url)
        const users = await response.json()
        setUsers(users)
        console.log(users);
      }
useEffect(() =>{
  getUsers()
    },[])

// const newppl = users.map((user) =>{
//     const {id, fact} = user
//     return <li key={id}>
//       <p>{fact}</p>
//     </li>
//    })
function name(params) {
  console.log('hi');
}

  name()
 return (
   <>
   <h3>github users</h3>
   <ul>
  ;o
   </ul>
   </>
 );
}

export default App;
