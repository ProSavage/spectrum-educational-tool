import { Flex, Text, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import React from "react"

interface CaseStudyQuestionProps {
      question: any
      checkAnswers: boolean
}

export const CaseStudyQuestion: React.FC<CaseStudyQuestionProps> = ({ question, checkAnswers }) => {

      const [value, setValue] = React.useState("false")

      return <Flex my={4} flexDir={"column"}>
            <Text fontSize={"xl"} >{question?.question}</Text>
            <RadioGroup value={value} onChange={setValue}>
                  <Stack>
                        {question.choices.map(choice => <Radio
                              // this only shows invalid if the question is answered, checkAnswers is true, and the choice is incorrect.
                              isInvalid={!choice.correct && checkAnswers && choice.answer === value}
                              value={choice.answer}
                        >
                              {choice.answer}
                        </Radio>)
                        }
                  </Stack>
            </RadioGroup>
            {checkAnswers && <Flex mt={2} flexDir={"column"}>
                  <Text fontWeight={"bold"}>Answer:</Text>
                  <Text>{question.answer}</Text>
            </Flex>}
      </Flex>;
}