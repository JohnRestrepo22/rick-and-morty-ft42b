import './App.css';
import Cards from './components/Cards/Cards.jsx';
import { useState } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar/NavBar'
import About from "./components/About/About"
import { Route,Routes,useLocation,useNavigate, } from 'react-router-dom';
import Detail from "./components/Detail/Detail"
import Forms from './components/Form/Form';
import { useEffect } from 'react';
import Favorites from './components/Favorites/Favorites';
const EMAIL = 'restrepojohn228@gmail.com';
const PASSWORD = 'counter123';

function App() { 
   const {pathname} = useLocation()
   const [characters,setCharacters] = useState([])
  
   const navigate = useNavigate();
const [access, setAccess] = useState(false);

function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}
useEffect(() => {
   !access && navigate('/');
}, [access]);
  
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
            { pathname !== "/" && <NavBar onSearch={onSearch}/>}
         </div>
         <Routes>
            <Route path='/' element={<Forms login={login}/>}></Route>
            <Route path="/About" element={<About/>}/>
            <Route path="/home" element={
               <Cards characters={characters} onClose={onClose} />
            }/>
            <Route path="/detail/:id" element={<Detail/>} />
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>

      </div>
   );
   }

export default App;
