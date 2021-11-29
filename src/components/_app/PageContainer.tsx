import { Flex } from "@chakra-ui/react";
import React, { ReactChildren, ReactNode } from "react"
import { SideBar } from "./SideBar";

interface PageContainerProps {
      children: ReactNode
}

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {

      


      return (
            <Flex width={"100%"} height={"100vh"}>
                  <Flex maxW={"150px"} height={"100%"}>
                        <SideBar/>
                  </Flex>
                  <Flex flexGrow={1}>
                        {children}
                  </Flex>
            </Flex>
      );
}