import React from 'react';
import { useRoutes } from 'react-router-dom';

import Login from './pages/pageLogin/Login';
import Home from './pages/pageHome/Home';
import NotFound from './pages/pageNotFound/NotFound';

import DataProvider from './context/DataProvider';
import GlobalStyles from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { Dark } from './styles/themes';

function App() {
  const routes = useRoutes([
    { path: '/', element: <Login /> },
    { path: '/home', element: <Home /> },
    {path: '*', element: <NotFound />},
  ]);
  return (
    <ThemeProvider theme={ Dark }>
      <GlobalStyles />
      <DataProvider>
        {routes}
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
