import React from 'react';
import { render } from 'react-dom';
import 'fontsource-roboto';

import App from './client/App';

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

render(<App />, document.getElementById('root'));
