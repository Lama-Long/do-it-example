import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../03/Input';

describe('<Input>', () => {
    it('renders without crashing ', () => {
        expect(() => {
            shallow(<Input name={'spec'} />);
        }).not.toThrow();
    });
    const wrapper = shallow(<Input name={'spec'} />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper).toHaveLength(1);
});
