import React from 'react';
import { render } from '@testing-library/react';
import ProfileMissions from '../components/ProfileMissions';

describe('Profile Missions Testing', () => {
  it('Should render Profile Missions and compare with Snapshot', () => {
    const { asFragment } = render(<ProfileMissions name="Thaicom" />);
    expect(asFragment(<ProfileMissions name="Thaicom" />)).toMatchSnapshot();
  });
});
