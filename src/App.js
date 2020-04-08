import React from 'react';
import logo from './logo.svg';
import { Button, Icon } from 'semantic-ui-react';
import ListExampleIcon from './link.js';
import FormExampleFieldControlId from './form-extract.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, World</h1>
        <FormExampleFieldControlId />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          I'm adding some text!
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button size="small" color="green">
          <Icon name="download" />
          download
        </Button>

        <Button size="small" icon={{color: 'red', name: 'like'}} content ="like" />

        <ListExampleIcon />
      </header>
    </div>
  );
}

export default App;
