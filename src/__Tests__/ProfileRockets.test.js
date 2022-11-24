import React from 'react'
import {render} from '@testing-library/react'
import ProfileRockets from '../components/ProfileRockets'

it('should take a snapshot', () => {
  const { asFragment } = render(<ProfileRockets name={"ele"}/>)

  expect(asFragment(<ProfileRockets name={"ele"}/>)).toMatchSnapshot()
});
