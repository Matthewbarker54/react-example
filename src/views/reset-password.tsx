import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@chakra-ui/button';
import { Flex, Heading, Link, Text } from '@chakra-ui/layout';
import { FormikInput } from '../components/form/input/formikInput';

const PassReset = () => {
    const [ confirmScreen, setConfirmScreen ] = React.useState(false)

    const reset = (values: any, actions: any) => {
        console.log(values)
        setConfirmScreen(true)
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
                {confirmScreen ?
                <>
                    <Heading as='h1' mb='2rem'>
                        Email Sent
                    </Heading>
                    <Text>If the email matches one in our system, then an email will appear in your inbox soon</Text>
                </>
                :
                <>
                    <Heading as='h1' mb='2rem'>
                        Reset Password
                    </Heading>
                    <Formik 
                        initialValues={{email: ''}}
                        validationSchema={Yup.object({
                            email: Yup.string().email('Must be a valid email').required('Email is required'),
                        })}
                        onSubmit={reset}
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
                                <Flex
                                    direction='column'
                                    align='center'
                                    >
                                    <Button type='submit' mb='1rem' disabled={isSubmitting}>Reset</Button>
                                    <Link href="/">Back</Link>
                                </Flex>
                            </Form>
                        )}
                    </Formik>
                </>
                }
            </Flex>

        </Flex>
    </Flex>
  );
}

export default PassReset;
