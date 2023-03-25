import 'styles/roboto/stylesheet.css'
import 'styles/global.css'
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query'
import React from 'react'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'

// eslint-disable-next-line react/prop-types
function MyApp ({ Component, pageProps }) {
  const queryClientRef = React.useRef()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      {/* eslint-disable-next-line react/prop-types */}
      <Hydrate state={pageProps.dehydratedState}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
