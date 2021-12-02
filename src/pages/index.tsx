import { Box, Button, chakra, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { supabase } from "../supabase/init";

const Index = () => {

  const user = supabase.auth.user();

  const router = useRouter();

  useEffect(() => {
    console.log(user, "user")
    if (user === null || user.aud !== "authenticated") {
      router.push("/auth/login")
    }
  }, [])


  const signout = () => {
    supabase.auth.signOut().then(() => router.push("/auth/login"))
  }

  const renderIfLoggedIn = () => {
    if (user === null) {
      return
    }
    return <Flex flexDir={"column"}>
      <Text fontWeight={"bold"}>Email: <chakra.span fontWeight={"medium"}>{user.email}</chakra.span>
      </Text>
      <Flex my={2}>
        {/* <Button m={1}>Case Studies</Button> */}
        <Button onClick={() => signout()} colorScheme={"red"} >Log Out</Button>
      </Flex>
    </Flex>
  }

  return <Flex p={3} width={"100%"}>
    <Flex flexDir={"column"}>
      <Text fontWeight={"bold"} fontSize={"2xl"}>Hello!</Text>
      {renderIfLoggedIn()}
    </Flex>
  </Flex>
}

export default Index;