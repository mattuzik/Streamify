import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import type { ReactNode } from 'react';
import { ThemeProvider } from './ThemeProvider';
import { store } from '../store';
import ScrollToTop from '@/shared/lib/scrollToTop';

export const withProviders = (children: ReactNode) => (
  <Provider store={store}>
    <Router>
      <ScrollToTop />
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </Router>
  </Provider>
);
