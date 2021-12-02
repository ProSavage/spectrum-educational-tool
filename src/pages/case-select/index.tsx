import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { supabase } from "../../supabase/init";

const Index = () => {


      const [studies, setStudies] = useState([]);

      const fetchData = async () => {
            const { data, error } = await supabase.from("case-studies").select("*");
            console.log(data, error)
            setStudies(data.sort((a, b) => a.id - b.id))
      }

      useEffect(() => {
            fetchData();
      }, [])

      const router = useRouter();

      return <Flex flexDir={"column"} p={4}>
            <Text fontWeight={"bold"} fontSize={"4xl"}>Case Studies</Text>
            <Flex flexDir={"row"} flexWrap={"wrap"} my={4}>
                  {studies.map(study => <Flex
                        cursor={"pointer"}
                        m={1}
                        border={"1px"}
                        borderColor={"gray.600"}
                        p={3}
                        borderRadius={5}
                        flexDir={"column"}
                        key={study.id}
                        onClick={() => router.push("/case-select/" + study.id)}
                  >
                        <Image src={study.thumbnail_url} alt={study.name} height={"150px"} />
                        <Text mt={1} fontWeight={"bold"}>{study.name}</Text>
                  </Flex>)}
            </Flex>
      </Flex>
}

export default Index;