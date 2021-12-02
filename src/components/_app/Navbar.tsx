import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react"
import { useRouter } from "next/router";
interface NavbarProps {

}

export const Navbar: React.FC<NavbarProps> = ({ }) => {


      const items = [
            {
                  text: "Home",
                  link: "/"
            },
            {
                  text: "Case Select",
                  link: "/case-select"
            },
      ]

      const router = useRouter();

      return (
            <Flex alignContent={"space-between"} alignItems={"center"} flexDir={"row"} justifyContent={"space-between"} background={"orange.500"} width={"100%"}>
                  <Text fontSize={"lg"} m={3} fontWeight={"bold"} textAlign={"center"}>Spectrum Education</Text>
                  <Flex flexDir={"row"} justifyContent={"center"} height={"100%"} >
                        {items.map(item => <Box
                              key={item.link}
                              p={2}
                              // width={"100%"}
                              _hover={{
                                    color: "blue.500"
                              }}
                              cursor={"pointer"}
                              my={1}
                              onClick={() => router.push(item.link)}
                        >
                              {item.text}
                        </Box>)}
                  </Flex>
            </Flex>
      );
}