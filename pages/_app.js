import '../styles/globals.css'
import '../styles/color-pallete.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  })
  return <Component {...pageProps} />
}

export default MyApp
