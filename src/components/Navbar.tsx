import React, { ReactNode } from 'react';
import { IconButton, Box, CloseButton, Flex, Icon, useColorModeValue, Drawer, DrawerContent, Text, useDisclosure, BoxProps, FlexProps, Grid } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings, FiMenu, } from 'react-icons/fi';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';
import imagens from '../assets/imagens';

interface LinkItemProps {
  name: string;
  icon: IconType;
  rota: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Início', icon: FiHome, rota: '/' },
  { name: 'Cadastro', icon: FiTrendingUp, rota: '/cadastro' },
  { name: 'Cardapio', icon: FiCompass, rota: '/cardapio' },
];

export default function Navbar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>

      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Flex align="center" p="4" mx="4" borderRadius="lg" role="group" cursor="pointer" _hover={{ bg: 'cyan.400', color: 'white', }}
      {...rest}>
      {icon && (
        <Icon mr="4" fontSize="16" _groupHover={{ color: 'white', }} as={icon} />
      )}
      {children}
    </Flex>
  );
};

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <ColorModeSwitcher />
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <img src={imagens.logoDois} />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <div style={{ height: '60px' }} />
      {LinkItems.map((link) => (
        <Link to={link.rota} style={{ textDecoration: 'none', boxShadow: 'none', }}>
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        </Link>

      ))}

    </Box>
  );
};



interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};