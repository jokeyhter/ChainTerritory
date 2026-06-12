// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainTerritory title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainTerritory/i);
    expect(titleElement).toBeInTheDocument();
});
