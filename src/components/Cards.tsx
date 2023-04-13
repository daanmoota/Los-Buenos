import { Button, Stack, Heading, Text, Divider, ButtonGroup, Image, CardHeader, CardBody, CardFooter, Card } from '@chakra-ui/react';

function Cards(props:any) {
    return (
      <Card style={{width: 360, marginRight: 30, marginBottom: 30, justifyContent: 'center', alignItems: 'center'}}>
  <CardBody>
    <Image src={props.src}  alt={props.alt} />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{props.titulo}</Heading>
      <Text>
        {props.descricao}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {props.preco}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='red'>
        Comprar
      </Button>

      <Button variant='ghost' colorScheme='black'>
        Adicionar ao carrinho
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    )
}

export default Cards