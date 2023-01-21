import { render } from "@testing-library/react";
import React from 'react';
import App from "./Pages/About";


import { BrowserRouter as Router } from 'react-router-dom';



test('renders react component', async () => {
  render(
    <Router>
      <App />
    </Router>,
  );


})

