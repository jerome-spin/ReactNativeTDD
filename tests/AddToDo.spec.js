import React from 'react';
import { shallow } from 'enzyme';
import AddToDo from '../src/AddToDo';

describe('AddToDo', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddToDo />);
  });

  it('is TextInput visible?', () => {
    expect(wrapper.find('TextInput')).toHaveLength(1);
  });

  it('is Button visible?', () => {
    expect(wrapper.find('Button')).toHaveLength(1);
  });
});

describe('Interaction', () => {
  let wrapper;
  let props;
  const text = 'some ToDo';

  beforeEach(() => {
    props = {
      onAdded: jest.fn(),
    };

    wrapper = shallow(<AddToDo {...props} />);

    wrapper.find('TextInput').simulate('changeText', text);
    wrapper.find('Button').prop('onPress')();
  });

  it('should call the onAdded callback with input text', () => {
    expect(props.onAdded).toHaveBeenCalledTimes(1);
    expect(props.onAdded).toHaveBeenCalledWith(text);
  });
});
