import '../public/css/app.scss'
import 'font-awesome/css/font-awesome.min.css';
import 'reflect-metadata'

import type { AppProps } from 'next/app'
import { isProd } from '../constants'

function App({ Component, pageProps }: AppProps) {

  // importng css override for deployment
  if (isProd)
    require('../public/css/production.scss');

  return <Component {...pageProps} />
}

export default App
