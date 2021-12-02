import { Flex } from "@chakra-ui/react";
import React, { ReactChildren, ReactNode } from "react"
import { Navbar } from "./Navbar";

interface PageContainerProps {
      children: ReactNode
}

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {




      return (
            <Flex width={"100%"} flexDir={"column"} >
                  <Navbar />
                  <Flex flexGrow={1}>
                        {children}
                  </Flex>
            </Flex>
      );
}