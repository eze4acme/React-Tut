import React, {useState, useEffect} from 'react'
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null); // Initialize data as null

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  if (!data) {
    return <div>Loading...</div>; // Show a loading message until data is fetched
  }

  return (
    <div>
      <ul>
        {data.map(user =>{
            const {id, avatar_url, login, html_url} = user
            return(
                <li key={id}>
                    <img src={avatar_url} alt="" />
                </li>
            )
        })}
        </ul> 
    </div>
  );
}

export default App;




















































// function App() {
//     const url = 'https://api.github.com/users'
//     const [users, setUsers] = useState('')
    
//     async function getUsers() {
//         const response = await fetch(url)
//         const data = await response.json()
//         return setUsers(data)
//     }

//     useEffect(() =>{
//         getUsers()
//     }, [])

//     if(!users){
//         return <h1>Loading......</h1>
//     }

//   return (
//     <div>
//         <h1>Github users</h1>
//         <ul className='setup'>
//             {users.map(user =>{
//                 const {id, login, avatar_url, html_url} = user
//                 // console.log(user);
//                 return (<li key={id}>
//                         <img src={avatar_url} alt={login} />
//                         <div className="text-section">
//                             <h1>{login}</h1>
//                             {/* <a href={html_url}>profile</a> */}
//                         </div>
//                     </li>)
               
//               })  
//             }
//         </ul>
//     </div>
//   )
// }

// export default App

