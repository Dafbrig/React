import React from 'react';
import { ReactDOM }  from 'react-dom/client';
import { SecondApp } from './SecondApp';
//import { FirstApp } from './FirstApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <SecondApp/>
    </React.StrictMode>
);

