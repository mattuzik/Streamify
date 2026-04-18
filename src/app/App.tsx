import { withProviders } from './providers';
import { AppRouter } from './providers/RouterProvider';
import Header from '@/widgets/header';
import Footer from '@/widgets/footer';
import './styles/main.scss';

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default () => withProviders(<App />);
