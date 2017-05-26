import React from 'react';
import ReactDOM from 'react-dom';
import {Todo} from './components/main'

let tasksList = ["task 1", "task 2", "task 3"];

ReactDOM.render(
  <Todo tasks={tasksList} />,
  document.getElementById('app')
);