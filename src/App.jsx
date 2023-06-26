// import React, { useState, useEffect } from "react";
// import items from "./data";
import "./App.css";

  

import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(''); // Initialize data as null

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error(error));
  }, []);

  if (!data) {
    return <div>Loading...</div>; // Show a loading message until data is fetched
  }

  return (
    <div>
       <h2>Github Users</h2>
       <div className="users">
        {data.map((user) =>{
            const {id, avatar_url, html_url, login} = user
            return <li key={id}>
                <img src={avatar_url} alt="" />
                <div className="text-section">
                    <h4>{login}</h4>
                    <a href={html_url}>Profile</a>
                </div>
            </li>
        })}
       </div>
    </div>
  );
}

export default App;
