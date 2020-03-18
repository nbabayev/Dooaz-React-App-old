import React from 'react';
import  Header   from './Layouts/Header';
import  Footer   from './Layouts/Footer';
import {  Switch } from 'react-router';
import { BrowserRouter as Router,Route } from 'react-router-dom'
import NewAd from './NewAd'
import Home from './Home';
import Ad from './Ad';
import MyAdverts from './MyAdverts';
import Personal from './Personal';
import Login from './Login';
import Registration from './Registration'
import Success from './Success';

class App extends React.Component {
  render() {
    return (
    
        <div>
        <Router>
           <Switch>
               <Route exact path="/"><Home/></Route>
               <Route path="/NewAd" component={NewAd}></Route>           
               <Route path="/Login" component={Login}></Route>
               {/* {this.state.authUser ? (<NonAuth />) : <Route path="/Login" component={Login}></Route>} */}
               <Route path="/Registration"component={Registration}></Route>
               <Route path="/Ad" component={Ad}></Route>
               <Route path="/Success" component={Success}></Route>
               <Route path="/Personal" component={Personal}></Route>
           </Switch>
        </Router>
       </div>
    );
  }
}

export default App;
