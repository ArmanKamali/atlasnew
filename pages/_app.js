import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import 'react-quill/dist/quill.snow.css'
import { store, persistor } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>

  )
}

export default MyApp
