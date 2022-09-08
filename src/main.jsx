import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {db} from "./db.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <App db={db} />
)
