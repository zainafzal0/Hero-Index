import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Home/Home'
import SearchResults from './Search-Results/SearchResults'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Store from './Store'



function App() {
  return (
    <Router>
      <Store>
        <div className="App">
          <Switch>
            <Route path="/hero-index" exact component={Home}/>
            <Route path="/hero-index/search-results" component={SearchResults}/>

          </Switch>
          
        </div>
        
      </Store>
    
    </Router>
    
  );
}

export default App;

