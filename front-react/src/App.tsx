import React from 'react';
import { Router } from './Router';
import { Header } from './components/Header';
import { CssBaseline, ThemeProvider, Container } from '@material-ui/core';
import { muiTheme } from './muiTheme';
import { AuthProvider } from './providers/AuthProvider';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={muiTheme}>
        <AuthProvider>
          <header>
            <Header />
          </header>
          <main style={{ paddingTop: '80px' }}>
            <Container maxWidth="md">
              <Router />
            </Container>
          </main>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
