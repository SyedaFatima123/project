import React, { Component } from 'react';
import Contact from './components/Contact';
import { Provider } from 'react-redux';
import store from './store';
import Message from './components/Message';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component{
   render(){
      return(
         <Provider store={store}>
            <Router>
               <Route exact path="/" component={Contact} />
               <Route exact path="/contact" component={Message} />
            </Router>
         </Provider>
      );
   }
}
export default App;