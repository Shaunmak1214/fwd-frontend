// @ts-nocheck
import {
  Box,
  Center,
  Container,
  Heading,
  HStack,
  Img,
  SimpleGrid,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import { AgeGroup, Bad, Good, Reviews } from '../assets';
import { Select } from '@chakra-ui/react';
import StackGrid from 'react-stack-grid';
import { useEffect, useState } from 'react';

const ReviewCard = ({ review }) => {
  return (
    <Center padding="20px" w="100%" h="100%">
      <VStack
        spacing={4}
        p={4}
        bg="white"
        borderRadius="lg"
        shadow="md"
        w="100%"
        h="100%"
        alignItems={'flex-start'}
      >
        <HStack w="100%" justifyContent={'space-between'}>
          <HStack w="max-content">
            <Img src={review.image} w={12} h={12} borderRadius="full" />
            <VStack align="start">
              <Text fontWeight="bold">{review.name}</Text>
              <Text fontSize="sm" color="gray.500">
                {review.age}
              </Text>
            </VStack>
          </HStack>
          <Tag
            size="lg"
            variant={review.sentiment === 'good' ? 'solid' : 'outline'}
            colorScheme={review.sentiment === 'good' ? 'green' : 'red'}
            justifySelf={'flex-end'}
            w="min-content"
          >
            {review.sentiment.charAt(0).toUpperCase() +
              review.sentiment.slice(1)}
          </Tag>
        </HStack>
        <Text textAlign={'left'} fontSize="20px">
          {review.review}
        </Text>
      </VStack>
    </Center>
  );
};

const Home = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews([
      {
        id: 1,
        name: 'John Doe',
        age: 25,
        review:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://bit.ly/2Z4KKcF',
        sentiment: 'bad',
      },
      {
        id: 1,
        name: 'John Doe',
        age: 25,
        review:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. iscing elit.',
        image: 'https://bit.ly/2Z4KKcF',
        sentiment: 'good',
      },
      {
        id: 1,
        name: 'John Doe',
        age: 25,
        review: 'Lorem ipsum dolor sit amet, consectetur',
        image: 'https://bit.ly/2Z4KKcF',
        sentiment: 'bad',
      },
      {
        id: 1,
        name: 'John Doe',
        age: 25,
        review:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit iscing elit.iscing elit.iscing elit..',
        image: 'https://bit.ly/2Z4KKcF',
        sentiment: 'good',
      },
      {
        id: 1,
        name: 'John Doe',
        age: 25,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://bit.ly/2Z4KKcF',
        sentiment: 'bad',
      },
      {
        id: 1,
        name: 'John Doe',
        age: 25,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://bit.ly/2Z4KKcF',
        sentiment: 'bad',
      },
      {
        id: 1,
        name: 'John Doe',
        age: 25,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://bit.ly/2Z4KKcF',
        sentiment: 'good',
      },
      {
        id: 1,
        name: 'John Doe',
        age: 25,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://bit.ly/2Z4KKcF',
        sentiment: 'good',
      },
    ]);
  }, []);
  return (
    <Center w="100%" h="100%">
      <Container
        maxW={'container.xl'}
        py="100px"
        alignItems={'flex-start'}
        d={'flex'}
      >
        <VStack h="100%" w="100%" spacing={'40px'} alignItems="flex-start">
          <Heading as="h1" size="lg" color="black">
            Quick Stats
          </Heading>
          <SimpleGrid
            columns={[1, 2, 2]}
            w="100%"
            spacingY={'24px'}
            spacingX={'60px'}
          >
            <HStack
              w="100%"
              h="100%"
              justifyContent={'space-between'}
              alignItems={'flex-start'}
              bgColor={'#f5f5f5'}
              padding={'20px'}
              borderRadius="xl"
            >
              <VStack w="80%" h="100%" alignItems={'flex-start'}>
                <Heading as="h1" size="lg" color="black">
                  1,987
                </Heading>
                <Text fontSize={'md'}>Total Reviews</Text>
              </VStack>
              <Center w="20%" h="100%">
                <Img src={Reviews} h="42px" w="42px" />
              </Center>
            </HStack>

            <HStack
              w="100%"
              h="100%"
              justifyContent={'space-between'}
              alignItems={'flex-start'}
              bgColor={'#f5f5f5'}
              padding={'20px'}
              borderRadius="xl"
            >
              <VStack w="80%" h="100%" alignItems={'flex-start'}>
                <Heading as="h1" size="lg" color="black">
                  24 - 50
                </Heading>
                <Text fontSize={'md'}>Average Age Group</Text>
              </VStack>
              <Center w="20%" h="100%">
                <Img src={AgeGroup} h="42px" w="42px" />
              </Center>
            </HStack>

            <HStack
              w="100%"
              h="100%"
              justifyContent={'space-between'}
              alignItems={'flex-start'}
              bgColor={'#f5f5f5'}
              padding={'20px'}
              borderRadius="xl"
            >
              <VStack w="80%" h="100%" alignItems={'flex-start'}>
                <Heading as="h1" size="lg" color="black">
                  354
                </Heading>
                <Text fontSize={'md'}>Good Reviews</Text>
              </VStack>
              <Center w="20%" h="100%">
                <Img src={Good} h="42px" w="42px" />
              </Center>
            </HStack>

            <HStack
              w="100%"
              h="100%"
              justifyContent={'space-between'}
              alignItems={'flex-start'}
              bgColor={'#f5f5f5'}
              padding={'20px'}
              borderRadius="xl"
            >
              <VStack w="80%" h="100%" alignItems={'flex-start'}>
                <Heading as="h1" size="lg" color="black">
                  245
                </Heading>
                <Text fontSize={'md'}>Bad Reviews</Text>
              </VStack>
              <Center w="20%" h="100%">
                <Img src={Bad} h="42px" w="42px" />
              </Center>
            </HStack>
          </SimpleGrid>

          <VStack w="100%">
            <HStack w="100%" paddingY="20px" justifyContent={'space-between'}>
              <Heading as="h1" size="lg" color="black">
                Reviews Explorer
              </Heading>

              <Select placeholder="Select Reviews Sentiment" w="30%">
                <option value="good">Good Reviews</option>
                <option value="bad">Bad Reviews</option>
                <option value="all" selected>
                  All Reviews
                </option>
              </Select>
            </HStack>

            <StackGrid
              columnWidth={'33.33%'}
              style={{
                width: '100%',
              }}
            >
              {reviews.map((review, idx) => (
                <ReviewCard key={idx} review={review} />
              ))}
            </StackGrid>
          </VStack>
        </VStack>
      </Container>
    </Center>
  );
};

export default Home;
