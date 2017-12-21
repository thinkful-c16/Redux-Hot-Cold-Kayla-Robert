import React from 'react';
import { shallow, mount } from 'enzyme';
import {makeGuess} from '../actions';

import {GuessForm} from './guess-form';

describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });

  // it('Should fire the onMakeGuess callback when the form is submitted', () => {
  //   const callback = jest.fn();
  //   const wrapper = mount(<GuessForm onMakeGuess={callback} />);
  //   const value = 10;
  //   wrapper.find('input[type="number"]').instance().value = value;
  //   wrapper.simulate('submit');
  //   expect(callback).toHaveBeenCalledWith(value.toString());
  // });

  it('Should dispatch onMakeGuess callback when the form is submitted', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<GuessForm dispatch={dispatch} />);
    const value = 10;
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate('submit');
    expect(dispatch).toHaveBeenCalled();
    const action=dispatch.mock.calls[0][0];
    expect(dispatch).toHaveBeenCalledWith(makeGuess(value.toString()));
  });


  it('Should reset the input when the form is submitted', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<GuessForm dispatch={dispatch} />);
    const input = wrapper.find('input[type="number"]');
    input.instance().value = 10;
    wrapper.simulate('submit');
    expect(dispatch).toHaveBeenCalled();
    const action=dispatch.mock.calls[0][0];
    expect(input.instance().value).toEqual('');
  });
});