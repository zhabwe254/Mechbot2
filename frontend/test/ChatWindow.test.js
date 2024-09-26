import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ChatWindow from './ChatWindow';

describe('ChatWindow Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ChatWindow chatHistory={[]} />);
    expect(wrapper.exists()).to.be.true;
  });

  it('renders chat messages', () => {
    const chatHistory = [
      { role: 'user', content: 'Hello' },
      { role: 'assistant', content: 'Hi there!' },
    ];
    const wrapper = shallow(<ChatWindow chatHistory={chatHistory} />);
    expect(wrapper.find('div.mb-2')).to.have.lengthOf(2);
  });
});
