import React , {useState,useRef} from 'react';
import { Container, Navbar,Nav,NavDropdown, Form,Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './custom.css'
import Navigation from './Navigation';
import Main from './Main'
import Footer from './Footer'
const App = () => {
  // const [todos,setTodos] =  useState([])
  // const todoref = useRef()
  // function handle(e){
  //   const name = todoref.current.value
  //   console.log(name)
  //   if (name === '') return
  //   setTodos(prevTodos => [...prevTodos,name])

  // }

  return (
    
      <div class="cointainer-fluid">
        <Navigation />
        <Main />
        <Footer />

      </div>
    
  )
}

export default App;
