import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'
import { PageContainer } from '../components/_app/PageContainer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <PageContainer>
        
      </PageContainer>
    </ChakraProvider>
  )
}

export default MyApp
