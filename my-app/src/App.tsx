import React from 'react';

import './App.css';
import { MyComponent } from './AppConstants';

export function App() {
  
  return (
    <div className="App">
      This is a testproject to check, if we can have webbdriverio tests and share code.
      <div className={MyComponent}>
        This represents a component.
      </div>
    </div>
  );
}