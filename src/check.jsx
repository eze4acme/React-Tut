// import React from "react";
// import items from "./data";
// import "./App.css";

// function App() {
//   return (
//     <section>
//       <BookListing />
//     </section>
//   );
// }

// const BookListing = () => {
//   const [people, setPeople] = React.useState(items);
//   const [isText, setIsText] = React.useState(true);

//   function handleClick(id) {
//     const newArray = people.filter((person) => person.id !== id);
//     // console.log(newArray);
//     setPeople(newArray);
//   }

//   function changeText() {
//     setIsText((preIsText) => !preIsText);
//   }

//   const books = people.map((item) => {
//     <Book key={item.id} {...item} handleClick={handleClick} />;
//   });

//   return (
//     <section className="books-section">
//       {books}
//       <h1>{isText ? "Hello Nigerians awesome react" : "Awseome World"}</h1>
//       <button type="text" onClick={changeText}>
//         Change text
//       </button>
//     </section>
//   );
// };

// function Book(props) {
//   const {
//     image,
//     title,
//     author,
//     price,
//     description,
//     publicationYear,
//     genre,
//     handleClick,
//   } = props;
// //   console.log(props);
//   return (
//     <article>
//       <h1>Genre: {genre}</h1>
//       <img src={image} alt="" />
//       <h2>{title}</h2>
//       <h5>{description}</h5>
//       <h1>{price}</h1>
//       <h6>{author}</h6>
//       <p> Publication Year:{publicationYear}</p>
//       <button onClick={() => handleClick(id)} >delete</button>
//     </article>
//   );
// }

// export default App;
