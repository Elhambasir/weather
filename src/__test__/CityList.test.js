import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import CityList from '../components/CityList';
import store from '../redux/store';

describe('Component render testing', () => {
  it('CityList page renders correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <CityList />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
