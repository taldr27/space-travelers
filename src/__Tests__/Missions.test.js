import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import missionsReducer from '../redux/missions/Missions';
import Missions from '../pages/Missions';

function renderWithRedux(rendererMissions) {
  const store = configureStore({
    reducer: {
      missions: missionsReducer,
    },
  });
  return render(<Provider store={store}>{rendererMissions}</Provider>);
}

describe('Missions Testing', () => {
  test('Render Missions with Redux Store', () => {
    renderWithRedux();
  });

  test('Render Missions', () => {
    const renderMissions = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Missions />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(renderMissions).toMatchSnapshot();
  });
});
