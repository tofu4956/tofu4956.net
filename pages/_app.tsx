import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Script defer strategy="beforeInteractive" data-domain="tofu4956.net" src="https://internal.tofu4956.net/js/plausible.js" />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
