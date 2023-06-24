import React from "react";
import items from './data'
import './App.css'

function App() {
  return (
   <section>
    <BookListing />
   </section>
  );
}


const BookListing = () => {
  // console.log(items);
  const [people, setPeople] = React.useState(items)
  // let tilt = "Hello Nigeria";
  const [isText, setIsText] = React.useState(true)
  const books = people.map(item => {
    return (
      <Book key={item.id} {...item} />
    )
  })
  function handleClick() {
    return setPeople([])
  }
  function changeText() {
   setIsText(preIsText => !preIsText)
  }
    
  return (
      <section className="books-section">
       {books}
       <h1>{isText ? 'Hello Nigerians awesome react' : 'Awseome World'}</h1>
       <button type="text" onClick={changeText}>Change text</button>
       <button onClick={handleClick}>Clear All</button>
      </section>

  );
}


function Book(props) {
  const { image, title, author, price, description, publicationYear, genre } = props;
  console.log(props);
  return (
    <article>
      <h1>Genre: {genre}</h1>
      <img src={image} alt="" />
      {/* <h1>{image}</h1> */}
      <h2>{title}</h2>
      <h5>{description}</h5>
      <h1>{price}</h1>
      <h6>{author}</h6>
      <p> Publication Year:{publicationYear}</p>
    </article>
  );
}

export default App;