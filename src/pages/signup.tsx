import { Flex, Text, Input, FormLabel, FormControl, Box, Button } from "@chakra-ui/react";
import React from "react";
import { Formik, Form } from "formik";
import { FormInputField } from "../components/utilities/FormControlField";

const Signup = () => {
      return <Flex width={"100%"} justifyContent={"center"} alignItems={"center"}>
            <Flex
                  minW={"325px"}
                  background={"gray.700"}
                  flexDir={"column"}
                  alignItems={"center"}
                  border={"1px"}
                  borderColor={"gray.600"}
                  padding={3}
                  borderRadius={5}
            >
                  <Text my={2} fontWeight={"bold"} fontSize={"2xl"}>Signup</Text>
                  <Formik
                        initialValues={{ username: "", password: "", confirmPassword: "" }}
                        onSubmit={async (values, { setErrors }) => {
                              console.log(values)
                        }}
                  >
                        {({ values, isSubmitting }) => (
                              <Form style={{ width: "100%" }}>
                                    <Box my={1}>
                                          <FormInputField
                                                name={"username"}
                                                label={"Username"}
                                                placeholder={values?.username}
                                                helper={"Your auburn username"}
                                          />
                                    </Box>
                                    <Box mt={3}>
                                          <FormInputField
                                                label={"Password"}
                                                name={"password"}
                                                placeholder={values?.password}
                                                helper={"Atleast 5 characters."}
                                                type={"password"}
                                          />
                                    </Box>
                                    <Box mt={3}>
                                          <FormInputField
                                                label={"Confirm Password"}
                                                name={"confirmPassword"}
                                                placeholder={values?.confirmPassword}
                                                helper={"Match the value in password."}
                                                type={"password"}
                                          />
                                    </Box>
                                    <Box mt={2} width={"100%"}>
                                          <Button
                                                type={"submit"}
                                                isLoading={isSubmitting}
                                                colorScheme={"blue"}
                                                width={"100%"}
                                          >Submit</Button>
                                    </Box>
                              </Form>
                        )}
                  </Formik>
            </Flex>
      </Flex>
}
export default Signup;
