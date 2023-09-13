import './App.css';
import Cards from './components/Cards/Cards.jsx';
import { useState } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar/NavBar'
import About from "./components/About/About"
import { Route,Routes } from 'react-router-dom';
import Detail from "./components/Detail/Detail"

function App() { 
   const [characters,setCharacters] = useState([])
  
const example = {
         id: 1,
         name: 'Rick Sanchez',
         status: 'Alive',
         species: 'Human',
         gender: 'Male',
         origin: {
            name: 'Earth (C-137)',
            url: 'https://rickandmortyapi.com/api/location/1',
         },
         image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      };
      function onSearch(id) {
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               alert('¡No hay personajes con este ID!');
            }
         });
      }
       const onClose = id => {
         setCharacters(characters.filter(char => char.id !== id))
       }
   
   return (
      <div className='App'>
         <div className='loco'>
            <NavBar onSearch={onSearch}/>
         </div>
         <Routes>
            <Route path="/About" element={<About/>}/>
            <Route path="/home" element={
               <Cards characters={characters} onClose={onClose} />
            }/>
            <Route path="/Detail" element={<Detail/>} />
         </Routes>

      </div>
   );
   }

export default App;
