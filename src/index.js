import React from "react";
import ReactDom from "react-dom";
//CSS
import "./index.css";
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  const title = "Ikigai: The Japanese secret to a long and happy life";
  const author = "Héctor García";
  return (
    <article className="book">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {}
    </article>
  );
};

// {} => to access JS world
// Always pass something in {} that returns the value (an expression)
// {let x = 6} (a statement) will generate error
ReactDom.render(<BookList />, document.getElementById("root"));
