import { chakra, Flex, Text } from "@chakra-ui/react";
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

  const renderUserEmail = () => {
    if (user === null) {
      return
    }
    return <Text fontWeight={"bold"}>Email: <chakra.span fontWeight={"medium"}>{user.email}</chakra.span></Text>
  }

  return <Flex p={3} width={"100%"}>
    <Flex flexDir={"column"}>
      <Text fontWeight={"bold"} fontSize={"2xl"}>Hello!</Text>
      {renderUserEmail()}
    </Flex>
  </Flex>
}

export default Index;