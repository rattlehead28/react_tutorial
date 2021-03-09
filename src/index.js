import React from "react";
import ReactDom from "react-dom";
//CSS
import "./index.css";

const books = [
  {
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
    title: "Ikigai: The Japanese secret to a long and happy life",
    author: "Héctor García",
  },
  {
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/81cpDaCJJCL._AC_UL200_SR200,200_.jpg",
    title: "The Psychology of Money",
    author: "Morgan Housel ",
  },
];
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book book={book}/>
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

// {} => to access JS world
// Always pass something in {} that returns the value (an expression)
// {let x = 6} (a statement) will generate error
ReactDom.render(<BookList />, document.getElementById("root"));
