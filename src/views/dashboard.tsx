import React from 'react';
import { Flex, Heading } from '@chakra-ui/layout';

const Dashboard = () => {

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
                    Welcome
                </Heading>
            </Flex>

        </Flex>
    </Flex>
  );
}

export default Dashboard;
