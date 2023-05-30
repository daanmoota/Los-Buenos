import { Card, CardBody, Divider, Image, Heading, Text, Stack } from '@chakra-ui/react';

interface ItemCarrinho {
  src: string;
  nome: string;
  preco: number;
}

function ItensCarrinho(props: ItemCarrinho) {

  return (
    <Card style={{width: 100, height:100, marginRight: 30, marginBottom: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: "grey"}}>
      <CardBody>
        <Image src={props.src} />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{props.nome}</Heading>
          <Text color='blue.600' fontSize='2xl'>{props.preco}</Text>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
}

export default ItensCarrinho;
