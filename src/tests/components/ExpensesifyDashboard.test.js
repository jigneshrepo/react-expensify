import React from 'react';
import {shallow} from 'enzyme';
import ExpensifyDashBoard from '../../components/ExpensifyDashBoard';

test('should render dashboard correclty',()=>{
    const wrapper = shallow(<ExpensifyDashBoard />);
    expect(wrapper).toMatchSnapshot();
});
