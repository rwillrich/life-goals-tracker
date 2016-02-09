import '../test-helper'

import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import Counter from '../../src/components/counter'

describe('Counter', () => {
  it('should render the counter value', () => {
    const wrapper = shallow(
      <Counter counter={1} />
    )

    expect(wrapper.find('h1').text()).to.equal('1')
  })
})
