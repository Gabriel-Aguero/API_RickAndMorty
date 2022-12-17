/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import Navbar from "./components/navbar/Navbar.jsx"
import ListCard from "./components/funciones/ListCard.jsx"
import Paginacion from "./components/paginacion/Paginacion.jsx"
import { Container } from '@mui/material';

function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then(data => {
        setCharacters(data.results)
        setInfo(data.info)
      })
      .catch(error => console.error(error));
  }

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  const onPrevious = (url) => {
    fetchCharacters(info.prev);
  }

  const onNext = (url) => {
    fetchCharacters(info.next);
  }

  return (
    <Container fixed>
      <Navbar />
      <Paginacion 
        prev={info.prev} 
        next={info.next} 
        onPrevious={onPrevious} 
        onNext={onNext} 
      />

      <ListCard character={characters} />
      <Paginacion 
        prev={info.prev} 
        next={info.next} 
        onPrevious={onPrevious} 
        onNext={onNext} 
      />
    </Container>
  );
}

export default App;
