import React from 'react'
import starboy from "../assets/starboy.jpeg"
import { Card, CardHeader, CardBody, CardFooter,Stack,Heading,Text,Divider,Image,Button,ButtonGroup, Skeleton } from '@chakra-ui/react'
const ProdCard = ({Product}) => {
    
  return (
    // <Skeleton>
    <Card maxW='xs' bgColor={"#D89726"} margin={25}>
  <CardBody>
    <Image
      src={`https://ethnosaj-apis.onrender.com/api/v1/products/get-photo/${Product._id}`}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' color={"black"}>{Product.name}</Heading>
      <Text color={"black"}>
       {Product.description}
      </Text>
      <Text color='black' fontSize='2xl'>
        Rs.{Product.rentalP}/day
      </Text>
      <Text color='black' fontSize='1xl'>
       Original Item Price: Rs.{Product.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blackAlpha'>
        Rent now
      </Button>
      <Button variant='ghost' colorScheme='gray'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
// </Skeleton>
  )
}

export default ProdCard;