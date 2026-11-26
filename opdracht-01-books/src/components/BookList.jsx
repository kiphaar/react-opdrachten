import Book from "./Book";
import Layout from "./Layout";
import { useState } from "react";
import BookCounter from "./BookCounter";

const BookList = () => {
  const [Books, setBook] = useState([
    {
      id: 1,
      Title: "Harry Potter And the Sorcerer's Stone",
      Author: "J.K Rowling",
      Image: "/images/book-1.png",
    },
    {
      id: 2,
      Title: "Fantasia VI",
      Author: "Geronimo Stilton",
      Image: "/images/book-2.png",
    },
    {
      id: 3,
      Title: "The Hunger Games",
      Author: "Suzanne Collins",
      Image: "/images/book-3.png",
    },
  ]);
  return (
<>
          <BookCounter aantal={Books.length} />
    <section className="booklist">


      {Books.map((b) => (
        <Book key={b.id} Title={b.Title} Author={b.Author} Image={b.Image} />
      ))}
    </section>
    </>
  );
};

export default BookList;
