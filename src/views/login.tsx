import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@chakra-ui/button';
import { Flex, Heading, Link } from '@chakra-ui/layout';
import { FormikInput } from '../components/form/input/formikInput';
// import { navigate } from '@reach/router';
// import useAuth from '../hooks/auth';

const Login = () => {
    // const { login } = useAuth

    const Login = async (values: any, actions: any) => {
        setTimeout(async () => {
            // const res = await login(values)
            // if (res) navigate('/dashboard')
          }, 1000)
        actions.setSubmitting(false)
    }

  return (
    <Flex
        w='100%'
        h='100vh'
        bg='#ccc'
    >
        <Flex 
            w='100%' 
            align='center' 
            justify='center'
            maxW='1440px'
            m='0 auto'
            p={['2rem', null, '2rem 3rem', '2rem 5rem']} 
        >
            <Flex 
                w='100%' 
                maxW='400px'
                direction='column'
                align='center'
                border='1px solid #e9e9e9'
                borderRadius='5px'
                bg='white'
                p={['1rem', null, '2rem']}
            >
                <Heading as='h1' mb='2rem'>
                    Sign In
                </Heading>
                <Formik 
                    initialValues={{email: '', password: ''}}
                    validationSchema={Yup.object({
                        email: Yup.string().email('Must be a valid email').required('Email is required'),
                        password: Yup.string().min(8, 'Password must be 8 characters or more').max(20,'Password must be 20 characters or less').required('Password is required')
                    })}
                    onSubmit={Login}
                >
                    {({
                        isSubmitting
                    }) => (
                        <Form>
                            <FormikInput 
                                type='email' 
                                label='Email' 
                                name='email' 
                                placeholder='Enter email' 
                            />
                            <FormikInput 
                                type='password' 
                                label='Password' 
                                name='password' 
                                placeholder='Enter password' 
                            />
                            <Flex
                                direction='column'
                                align='center'
                                >
                                <Button type='submit' mb='1rem' disabled={isSubmitting}>Login</Button>
                                <Link href='/reset-password' mb='0.5rem'>Forgot password</Link>
                                <Link href='/register'>Register</Link>
                            </Flex>
                        </Form>
                    )}
                </Formik>
            </Flex>

        </Flex>
    </Flex>
  );
}

export default Login;
