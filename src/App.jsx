import React, {useState, useEffect} from "react";
import items from "./data";
import "./App.css";

function App() {
  return (
    <section>
      <BookListing />
    </section>
  );
}

const BookListing = () => {

  const [people, setPeople] =useState(items);
  const [value, setValue] = useState(0);

  function handleClick(id) {
    const newArray = people.filter((person) => person.id !== id);
    setPeople(newArray);
  }
  
  useEffect(() =>{
    document.title = `New Messages:${value} ? >=1 ${value} : 0`
  }, [value])
  function handleIncrement() {
  
    setTimeout(() => {
      setValue(prevValue => prevValue + 1);
    }, 10);
  }
  console.log("i run first");

  const books = people.map((item) => {
    return<Book key={item.id} {...item} handleClick={handleClick} />;
  });
  
  return (
    <section className="books-section">
      {books}
      <h1>{value}</h1>
      <div className="btn-section">
        <button onClick={handleIncrement}>Click Me</button>
      </div>
    </section>
  );
};

function Book({id, image, title, author, price, description, publicationYear, genre, handleClick}) {
  return (
    <article>
      <h1>Genre: {genre}</h1>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <h5>{description}</h5>
      <h1>{price}</h1>
      <h6>{author}</h6>
      <p> Publication Year:{publicationYear}</p>
      <button onClick={() => handleClick(id)}>delete</button>
    </article>
  );
}

export default App;
