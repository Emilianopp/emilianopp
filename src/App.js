import 'bootstrap/dist/css/bootstrap.min.css'
import './custom.css'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home_page from './components/Home_page';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const App = () => {

  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>Emiliano Penaloza – AI Researcher | PhD at Université de Montréal</title>
        <meta name="description" content="Hey I'm Emiliano PhD student at Mila - Quebec" />
        <meta name="keywords" content="Emiliano Penaloza, AI, PhD, Mila, Recommender Systems, NLP, Deep Learning, Montreal" />
        <link rel="canonical" href="https://emilianopp.github.io" />
      </Helmet>
      <div className="app">
        <Router basename='/'>
          <Switch>
            <Route exact path="/home" component={Home_page}></Route>
            <Redirect to="/home"></Redirect>
          </Switch>
        </Router>
      </div>
    </HelmetProvider>
    </>
  )
}

export default App;
