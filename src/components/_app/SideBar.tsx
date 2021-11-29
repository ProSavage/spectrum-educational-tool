import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react"
import {useRouter} from "next/router";
interface SideBarProps {

}

export const SideBar: React.FC<SideBarProps> = ({ }) => {


      const items = [
            {
                  text: "Home",
                  link: "/"
            },
            {
                  text: "Case Select",
                  link: "/case-select"
            },
            {
                  text: "Progress",
                  link: "/progress"
            }
      ]

      const router = useRouter();

      return (
            <Flex alignContent={"center"} alignItems={"center"} flexDir={"column"} background={"orange.500"} height={"100%"} width={"100%"}>
                  <Text fontSize={"lg"} my={1} fontWeight={"bold"} textAlign={"center"}>Spectrum Education</Text>
                  <Flex flexDir={"column"} justifyContent={"center"} height={"100%"} width={"100%"}>
                        {items.map(item => <Box
                              pl={2}
                              py={2}
                              width={"100%"}
                              _hover={{
                                    backgroundColor: "orange.600"
                              }}
                              cursor={"pointer"}
                              my={1}
                              onClick={() => router.push(item.link)}
                        >
                              {item.text}
                              {" "}
                              &rarr;
                        </Box>)}
                  </Flex>
            </Flex>
      );
}