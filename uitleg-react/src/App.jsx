import './App.css'
import Movie from './components/Movie'
import Navbar from './components/Navbar'
import MovieList from './components/MovieList'
import { useState } from 'react'

function App() {
  
  const [number, setNumber] = useState(10) 
  const [book, setBooks] = useState([
    {title: 'book1', author: "nigger"},
    {title: 'book2', author: "nigger"},
    {title: 'book3', author: "nigger"},
    {title: 'book4', author: "nigger"},
    {title: 'book5', author: "nigger"},
    {title: 'book6', author: "nigger"}
 
  ] )





  // let number = 8;
  function changeNumber(){
      setNumber(number + 1 )
  }

  return (
    <>

    {book.map((poop) => (
      <Movie title={poop.title} , author={poop.author} />
    ))}




      <Navbar/>
      <h1>Hello niggers</h1>
      <MovieList/>  
     
     <h2>numma: {number}</h2>
      <button onClick={changeNumber}>Click</button>
    </>
  )
}

export default App
