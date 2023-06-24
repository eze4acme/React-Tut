import React from "react";
import items from './data'
import './index.css'

function App() {
  return (
   <section>
    <BookListing />
   </section>
  );
}


const BookListing = () => {
  // console.log(items);
  const books = items.map(item => {
    return (
      <Book key={item.id} {...item} />
    )
  })
  // console.log(books);
  return (
      <section className="books-section">
       {books}
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