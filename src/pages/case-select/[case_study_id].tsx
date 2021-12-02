import React, { useEffect, useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { supabase } from "../../supabase/init";
import { definitions } from "../../supabase/types";

const CaseSelect = (props: { case_study_id: number }) => {

  const [study, setStudy] = useState<definitions["case-studies"]>()


  const fetchData = async () => {
    const { data, error } = await supabase.from<definitions["case-studies"]>("case-studies").select("*").match({ id: props.case_study_id });
    console.log(data, error)
    setStudy(data[0])
  }

  useEffect(() => {
    fetchData()
  }, [props.case_study_id])


  const renderIfStudy = () => {
    if (!study) return undefined;
    return <Flex width={"100%"} flexDir={"column"}>
      <Text fontWeight={"bold"} fontSize={"4xl"}>{study!!.name}</Text>
      <Flex p={4} border={"1px"} borderColor={"gray.600"} borderRadius={5} justifyContent={"center"} alignItems={"center"}>
        <video controls width={"100%"}>
          <source src={study.video_url} type={"video/mp4"} />
        </video>
      </Flex>
      <Flex p={3} flexDir={"column"}>
        <Text fontSize={"2xl"} fontWeight={"bold"}>Description:</Text>
        <Text mt={2} fontSize={"lg"}>{study.description}</Text>
      </Flex>
    </Flex>

  }

  return <Flex width={"100%"} p={3}>
    {renderIfStudy()}
  </Flex>
}


export async function getServerSideProps({ params }) {
  const case_study_id = Number.parseInt(params.case_study_id);

  return { props: { case_study_id } };
}


export default CaseSelect;