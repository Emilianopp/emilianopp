import 'bootstrap/dist/css/bootstrap.min.css'
import './custom.css'
import { HashRouter as Router,Route,Switch,Link,Redirect } from 'react-router-dom';
import Home_page from './components/Home_page';

const App = () => {

  return (
    <>
    <div className = "app">
    <Router  basename='/'>
      <Switch>
     
     
     <Route exact path = "/home" component = {Home_page}></Route>
      

      <Redirect to = "/home" ></Redirect>
     </Switch>
    </Router>
    </div>
      </>
      
    
  )
}

export default App;
