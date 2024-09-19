import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios');

describe('App', () => {
  it('sends a message and displays the response', async () => {
    axios.post.mockResolvedValue({ data: { message: 'Hello! How can I assist you?' } });

    render(<App />);

    const input = screen.getByPlaceholderText('Type your message...');
    const button = screen.getByText('Send');

    fireEvent.change(input, { target: { value: 'Hi' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Hi')).toBeInTheDocument();
      expect(screen.getByText('Hello! How can I assist you?')).toBeInTheDocument();
    });
  });
});
