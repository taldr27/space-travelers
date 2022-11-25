import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import RocketsContainer from '../pages/Rockets';
import store from '../redux/configureStore';

describe('Rockets Testing', () => {
  test('Render Rockets', () => {
    const renderRockets = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <RocketsContainer />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(renderRockets).toMatchSnapshot();
  });
});
