import { AuthFormBase } from "../../components/auth/AuthFormBase";
import { Text, Box, Button, Link } from "@chakra-ui/react";
import { Formik, Form } from "formik"
import React from "react";
import { FormInputField } from "../../components/utilities/FormControlField";
import { supabase } from "../../supabase/init";
import {useRouter} from "next/router";

const Login = () => {
      const router = useRouter();
      return <AuthFormBase>
            <Text my={2} fontWeight={"bold"} fontSize={"2xl"}>Login</Text>
            <Formik
                  initialValues={{ email: "", password: "" }}
                  onSubmit={async (values, { setErrors }) => {
                        console.log("values", values)

                        const { user, session, error } = await supabase.auth.signIn({
                              email: values.email,
                              password: values.password
                        })
                        if (error) {
                              setErrors({ password: "Invalid credentials." })
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

                              <Box mt={2} width={"100%"}>
                                    <Button
                                          type={"submit"}
                                          isLoading={isSubmitting}
                                          colorScheme={"blue"}
                                          width={"100%"}
                                    >Submit</Button>
                              </Box>
                              <Text textAlign={"center"} my={2}>Don't have an account? <Link href={"/auth/signup"} color={"blue.300"}>Signup</Link></Text>

                        </Form>
                  )}
            </Formik>
      </AuthFormBase>
}

export default Login;