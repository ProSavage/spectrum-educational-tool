import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'
import { PageContainer } from '../components/_app/PageContainer'
import { supabase } from '../supabase/init';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {

  const user = supabase.auth.user();
  

  const router = useRouter()


  // this logged in check is bound to the router's pathname
  // So it will trigger on page load, but also on each redirect.
  
  useEffect(() => {
    console.log(user, "user")
    if (user === null || user.aud !== "authenticated") {
      router.push("/auth/login")
    }
  }, [router.pathname])

  return (
    <ChakraProvider resetCSS theme={theme}>
      <PageContainer>
        <Component {...pageProps}/>
      </PageContainer>
    </ChakraProvider>
  )
}

export default MyApp
