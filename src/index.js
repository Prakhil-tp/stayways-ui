import React from 'react';
import ReactDOM from 'react-dom';
import MainView from './components/homePage/mainView';
import SignUp from './components/homePage/signUpForms';

ReactDOM.render(
  <MainView />,
  document.getElementById('root')
);
ReactDOM.render(
  <SignUp />,
  document.getElementById('forms')
);