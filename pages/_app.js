import { SSRProvider } from 'react-bootstrap';
import '../styles/scss/custom.scss';

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
