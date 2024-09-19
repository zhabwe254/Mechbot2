import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MessageInput from './MessageInput';

describe('MessageInput', () => {
  it('calls onSendMessage when form is submitted', () => {
    const mockSendMessage = jest.fn();
    render(<MessageInput onSendMessage={mockSendMessage} isLoading={false} />);

    const input = screen.getByPlaceholderText('Type your message...');
    const button = screen.getByText('Send');

    fireEvent.change(input, { target: { value: 'Test message' } });
    fireEvent.click(button);

    expect(mockSendMessage).toHaveBeenCalledWith('Test message');
  });

  it('disables input and button when loading', () => {
    render(<MessageInput onSendMessage={() => {}} isLoading={true} />);

    const input = screen.getByPlaceholderText('Type your message...');
    const button = screen.getByText('Sending...');

    expect(input).toBeDisabled();
    expect(button).toBeDisabled();
  });
});
