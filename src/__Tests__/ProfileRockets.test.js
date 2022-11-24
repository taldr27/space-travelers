import React from 'react';
import { render } from '@testing-library/react';
import ProfileRockets from '../components/ProfileRockets';

describe('Profile Rockets Testing', () => {
  it('Should render Profile Rockets table and compare with Snapshot', () => {
    const { asFragment } = render(<ProfileRockets name="Thaicom" />);
    expect(asFragment(<ProfileRockets name="Thaicom" />)).toMatchSnapshot();
  });
});
