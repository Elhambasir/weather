import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import CityDetails from '../components/CityDetails';
import store from '../redux/store';

describe('Component render testing', () => {
  it('CityDetails page renders correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <CityDetails />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
