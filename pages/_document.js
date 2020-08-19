import Document, { Html, Head, Main, NextScript } from 'next/document'

import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Navbar />
          <div>
            <div className="flex flex-row mx-24">
              <Main />
              <SideBar />
            </div>
          </div>
          
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument