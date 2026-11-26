import { useState } from "react";



const Book = ({ Image, Title, Author }) => {

    const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0)

  function verhoogTeller(){
      setAantalKeerGelezen(aantalKeerGelezen + 1 )
  }

  return (
    <section className="book">
      <img src={Image} alt="Book Cover" />
      <h2>{Title}</h2>
      <h3>{Author}</h3>

      <h2>aantal keer gelezen: {aantalKeerGelezen}</h2>
      <button onClick={verhoogTeller}>keer gelezen</button>
    </section>
  );
};

export default Book;
