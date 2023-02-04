import React from 'react';
 import { Layout } from './Layout';
import { LoginPage } from 'pages/LoginPage';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
