import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, Divider, Image, Heading, Text, ButtonGroup, Button, Stack } from '@chakra-ui/react';

interface CardProps {
  src: string;
  titulo: string;
  descricao: string;
  preco: string;
  linkCompra: string;
  linkCarrinho: string;
}

function Cards(props: CardProps) {

  const handleCompra = () => {
    // lógica de compra do item
  }

  const handleAdicionarAoCarrinho = () => {
    // lógica de adicionar ao carrinho
  }

  return (
    <Card style={{width: 360, marginRight: 30, marginBottom: 30, justifyContent: 'center', alignItems: 'center'}}>
      <CardBody>
        <Image src={props.src} />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{props.titulo}</Heading>
          <Text>{props.descricao}</Text>
          <Text color='blue.600' fontSize='2xl'>{props.preco}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Link to={props.linkCompra}>
            <Button variant='solid' colorScheme='red' onClick={handleCompra}>
              Comprar
            </Button>
          </Link>
          <Link to={props.linkCarrinho}>
            <Button variant='ghost' colorScheme='black' onClick={handleAdicionarAoCarrinho}>
              Adicionar ao carrinho
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default Cards;
