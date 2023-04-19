import {Flex, Box, FormControl, FormLabel, Input, InputGroup, HStack, InputRightElement, Stack, Button, Heading, Text, useColorModeValue, Link, DarkMode, LightMode,  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Cards from '../components/Cards';
import imagens from '../assets/imagens';

  
const refri = 'https://s2.glbimg.com/GUda5oj9xkd_yQNyn36mDn9XJmo=/620x455/e.glbimg.com/og/ed/f/original/2018/08/17/beber-refrigerante-todos-os-dias-esta-te-matando.jpg'
  
  export default function Bebidas() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: 'center'}}>
        <Cards src={refri} titulo='Mega Bueno' descricao='4 hambúrguers de 80 gramas de carne bovina, queijo mussarela, impressionantes 6 fatias de bacon, molho da casa e pão brioche' preco='R$ 34,00' linkCompra='/Compra' linkCarrinho='/Carrinho'/>
        <Cards src={refri} titulo='Bueno Rings' descricao='2 hambúrguers de 80 gramas de carne bovina, queijo prato, onion rings, molho da casa e pão brioche' preco='R$ 27,00' linkCompra='/Compra' linkCarrinho='/Carrinho'/>
        <Cards src={refri} titulo='Bueno Chicken' descricao='Hambúrguer de 120 gramas de frango, queijo cheddar, bacon, alface, tomate, maionese e pão brioche' preco='R$ 27,00' linkCompra='/Compra' linkCarrinho='/Carrinho'/>
        <Cards src={refri} titulo='Tradicional' descricao='2 hambúrguers de 80 gramas de carne bovina, queijo mussarela, 2 fatias de bacon, molho da casa e pão brioche' preco='R$ 25,00' linkCompra='/Compra' linkCarrinho='/Carrinho'/>
        <Cards src={refri} titulo='Vegano' descricao='Hambúrguer de 100 gramas de grão de bico, queijo mussarela, alface, tomate, cebola roxa, maionese vegana e pão brioche' preco='R$ 29,00' linkCompra='/Compra' linkCarrinho='/Carrinho'/>
        <Cards src={refri} titulo='Vegano' descricao='Hambúrguer de 100 gramas de grão de bico, queijo mussarela, alface, tomate, cebola roxa, maionese vegana e pão brioche' preco='R$ 29,00' linkCompra='/Compra' linkCarrinho='/Carrinho'/>
        <Cards src={refri} titulo='Vegano' descricao='Hambúrguer de 100 gramas de grão de bico, queijo mussarela, alface, tomate, cebola roxa, maionese vegana e pão brioche' preco='R$ 29,00' linkCompra='/Compra' linkCarrinho='/Carrinho'/>
        <Cards src={refri} titulo='Vegano' descricao='Hambúrguer de 100 gramas de grão de bico, queijo mussarela, alface, tomate, cebola roxa, maionese vegana e pão brioche' preco='R$ 29,00' linkCompra='/Compra' linkCarrinho='/Carrinho'/>
      </div>
    );
  }