import { Flex, Text, Input, FormLabel, FormControl, Box, Button, Link } from "@chakra-ui/react";
import React from "react";
import { Formik, Form } from "formik";
import { FormInputField } from "../../components/utilities/FormControlField";
import { supabase } from "../../supabase/init";
import { AuthFormBase } from "../../components/auth/AuthFormBase";
import { useRouter } from "next/router";

const Signup = () => {

      const router = useRouter();
      return <AuthFormBase>
            <Text my={2} fontWeight={"bold"} fontSize={"2xl"}>Signup</Text>
            <Formik
                  initialValues={{ email: "", password: "", confirmPassword: "" }}
                  onSubmit={async (values, { setErrors }) => {
                        console.log("values", values)
                        if (values.password !== values.confirmPassword) {
                              console.log("pass not equal")
                              setErrors({ confirmPassword: "Password does not match confirm password." })
                              return;
                        }
                        const { user, session, error } = await
                              supabase.auth.signUp({
                                    email: values.email,
                                    password: values.password
                              })

                        if (error) {
                              setErrors({confirmPassword: error.message})
                              return
                        }

                        router.push("/")
                  }}
            >
                  {({ values, isSubmitting }) => (
                        <Form style={{ width: "100%" }}>
                              <Box my={1}>
                                    <FormInputField
                                          name={"email"}
                                          label={"Email"}
                                          placeholder={values?.email}
                                          helper={"Your auburn email"}
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
                              <Box mt={4} width={"100%"}>
                                    <Button
                                          type={"submit"}
                                          isLoading={isSubmitting}
                                          colorScheme={"blue"}
                                          width={"100%"}
                                    >Submit</Button>
                              </Box>
                              <Text textAlign={"center"} my={2}>Already have an account? <Link href={"/auth/login"} color={"blue.300"}>Login</Link></Text>

                        </Form>
                  )}
            </Formik>
      </AuthFormBase>
}

export default Signup;
