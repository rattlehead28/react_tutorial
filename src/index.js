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

const Book = () => (
  <article className="book">
    <Image />
    <Title />
    <Author />
  </article>
);
const Image = () => (
  <img
    src="https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg"
    alt=""
  />
);

const Title = () => (
  <h1>Ikigai: The Japanese secret to a long and happy life</h1>
);
const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    Héctor García
  </h4>
);
// {} => to access JS world
ReactDom.render(<BookList />, document.getElementById("root"));
