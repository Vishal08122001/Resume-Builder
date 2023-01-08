import { cleanup, render, screen } from "@testing-library/react";
import React from 'react';
import App from "./Pages/About";


import { BrowserRouter as Router } from 'react-router-dom';

// 👇️ wrap component that uses useLocation in Router

test('renders react component', async () => {
  render(
    <Router>
      <App />
    </Router>,
  );



}
  test("render TEMPLATE", () => {
  render(<App />);
  const linkElem = screen.getByText(/learn react/i)
  expect(linkElem).toBeInTheDocument();
}));

