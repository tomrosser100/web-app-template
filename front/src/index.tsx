import React from 'react'
import { createRoot } from 'react-dom/client';

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById('app') as Element);

root.render(<h1>Hello, world</h1>);