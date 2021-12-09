import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import * as React from 'react'
import Button from '@mui/material/Button';



function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
