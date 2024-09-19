import React from 'react';
import { render, screen } from '@testing-library/react';
import ChatWindow from './ChatWindow';

describe('ChatWindow', () => {
  it('renders chat messages', () => {
    const chatHistory = [
      { role: 'user', content: 'Hello' },
      { role: 'assistant', content: 'Hi there! How can I help you?' },
    ];

    render(<ChatWindow chatHistory={chatHistory} />);

    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('Hi there! How can I help you?')).toBeInTheDocument();
  });
});
