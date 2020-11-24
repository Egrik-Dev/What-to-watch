import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {LoginScreen} from './login';

configure({adapter: new Adapter()});

it(`Sending the form must send your username and password`, () => {
  const wrapper = shallow(
      <LoginScreen
        loginAction={() => {}}
        fetchFilmsAction={() => {}}
        authorizationStatus={`NO_AUTH`}
      />
  );

  const login = wrapper.find(`#user-email`);
  const password = wrapper.find(`#user-password`);

  login.simulate(`change`, {
    target: {value: `test@test.ru`}
  });
  password.simulate(`change`, {
    target: {value: `123456`}
  });
});


