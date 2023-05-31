import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import CityFilter from '../components/CityFilter';
import store from '../redux/store';

describe('Component render testing', () => {
  it('CityFilter page renders correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <CityFilter />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
