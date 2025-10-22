import React from 'react';
import ReactDOM from 'react-dom/client';

const browserInfo = navigator.userAgent;

const element = (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h2>Thông tin trình duyệt của bạn</h2>
    <h4>Browser's details: {browserInfo}</h4>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root4'));
root.render(element);