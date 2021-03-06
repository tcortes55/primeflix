import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import * as serviceWorker from './serviceWorker';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import RegisterVideo from './pages/register/video';
import RegisterCategory from './pages/register/category';

function PageNotFound() {
  return (
    <div>
      Error 404!
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/register/video" component={RegisterVideo} exact />
      <Route path="/register/category" component={RegisterCategory} exact />
      <Route component={PageNotFound}/>
    </Switch>
  </BrowserRouter>,
  
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
