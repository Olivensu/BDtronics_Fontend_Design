import { ChakraProvider } from '@chakra-ui/react'

const CustomChakraProvider = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>
}

export default CustomChakraProvider
