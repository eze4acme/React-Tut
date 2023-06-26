
import React, { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // This function will be executed after the component has rendered
    // Example: Fetching data from an API
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error(error));
  }, []); 
  return (
    <div>
      {/* Render the fetched data */}
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default App


