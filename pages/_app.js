import '../styles/index.css'
import 'highlight.js/styles/agate.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp