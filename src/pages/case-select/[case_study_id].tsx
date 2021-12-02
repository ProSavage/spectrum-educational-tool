import React, { useEffect, useState } from "react";
import { Button, Divider, Flex, Input, Radio, RadioGroup, Text } from "@chakra-ui/react";
import { supabase } from "../../supabase/init";
import { definitions } from "../../supabase/types";
import { CaseStudyQuestion } from "../../components/case-select/CaseStudyQuestion";

const CaseSelect = (props: { case_study_id: number }) => {

  const [study, setStudy] = useState<definitions["case-studies"]>()
  const [checkAnswers, setCheckAnswers] = useState(false);
  const [hasIncorrectAnswer, setHasIncorrectAnswer] = useState(true);


  const fetchData = async () => {
    const { data, error } = await supabase.from<definitions["case-studies"]>("case-studies").select("*").match({ id: props.case_study_id });
    console.log(data, error)
    setStudy(data[0])
    console.log(data[0])
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
        <Divider my={5} />
        <Text fontSize={"2xl"} fontWeight={"bold"}>Questions:</Text>
        {/* 
          Supabase's OpenAPI types generator says "JSON" columns are strings, whereas they give a response as a object
          So we just cast as any and keep moving :/
        */}
        {(study.discussion_question as any).map(question => <CaseStudyQuestion checkAnswers={checkAnswers} question={question} />)}
        <Flex>
          <Button colorScheme={"orange"} mr={2} onClick={() => setCheckAnswers(!checkAnswers)}>Check Answers</Button>
          <Button colorScheme={"blue"} isDisabled={!checkAnswers}>Mark Complete</Button>
        </Flex>
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