import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MessageInput from './MessageInput';

describe('MessageInput Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<MessageInput onSendMessage={() => {}} isLoading={false} />);
    expect(wrapper.exists()).to.be.true;
  });

  it('calls onSendMessage when form is submitted', () => {
    let messageReceived = '';
    const onSendMessage = (message) => {
      messageReceived = message;
    };
    const wrapper = shallow(<MessageInput onSendMessage={onSendMessage} isLoading={false} />);
    
    wrapper.find('input').simulate('change', { target: { value: 'Test message' } });
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    
    expect(messageReceived).to.equal('Test message');
  });

  it('disables input and button when isLoading is true', () => {
    const wrapper = shallow(<MessageInput onSendMessage={() => {}} isLoading={true} />);
    expect(wrapper.find('input').prop('disabled')).to.be.true;
    expect(wrapper.find('button').prop('disabled')).to.be.true;
  });
})
