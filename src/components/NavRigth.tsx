import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Text, Flex, Stack } from '@chakra-ui/react';

const NavRight = () => {
  return (
    <Flex alignItems="center" justifyContent="flex-end">
      <Box pr={4}>
        <Stack direction="row" spacing={4}>
          <Link to="/sobre">
            <Text>Sobre</Text>
          </Link>
          <Link to="/contato">
            <Text>Contato</Text>
          </Link>
        </Stack>
      </Box>
    </Flex>
  );
};

export default NavRight;
