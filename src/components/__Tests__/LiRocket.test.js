import renderer from 'react-test-renderer';
import RocketsContainer from '../../pages/Rockets'

test('render Home', () => {
  const renderHome = renderer.create(<RocketsContainer />).toJSON();
  expect(renderHome).toMatchSnapshot();
});
