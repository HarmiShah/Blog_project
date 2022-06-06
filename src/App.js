import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        {/* it is self closing instead of this regular<navbar></navbar> is also okay */}
        <div className="content">
          <Switch>
            {/* path for homepage */}
            <Route exact path = "/"> 
               <Home />
            </Route>
            {/* path for create */}
            <Route path = "/create"> 
               <Create />
            </Route>
            {/* path for create */}
            <Route path = "/blogs/:id"> 
               <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
