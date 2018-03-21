import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Routes from './routes';

const App = () => (
  <div>
    <Nav />
    <Routes />
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

export default hot(module)(App);