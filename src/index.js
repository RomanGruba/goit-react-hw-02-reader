import React from 'react';
import ReactDOM from 'react-dom';
import publications from './Reader/publications.json';
import Reader from './Reader/Reader';

const App = () => <Reader items={publications} />;

ReactDOM.render(<App />, document.getElementById('root'));
