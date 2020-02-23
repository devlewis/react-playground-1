import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import DemonymApp from './demonymApp';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

it('renders without errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemonymApp />, div);
  ReactDOM.unmountComponentAtNode(div);
})