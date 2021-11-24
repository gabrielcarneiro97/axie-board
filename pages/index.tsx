import { Box } from '@chakra-ui/react';
import { useTheme } from '@chakra-ui/system';
import { Text } from '@chakra-ui/layout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const theme = useTheme();

  return (
    <div>
      <Box shadow="md" bgColor={theme.colors.gray[200]} padding="1em">
        <Text fontSize="2xl">AxieBoard</Text>
      </Box>

    </div>
  )
}

export default Home
