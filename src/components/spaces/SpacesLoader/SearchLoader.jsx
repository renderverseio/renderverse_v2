import { memo } from 'react'
import { Puff } from 'react-loader-spinner'
import { Box } from '@chakra-ui/react'

const SearchLoader = ({ status }) => {
  return <Box display={"flex"} justifyContent="center" py={12}>
    {status === 'fetching' && <Box maxH="256" maxW="256">
      <Puff height={64} width={64} color="blue" radius={40} secondaryColor='green' />
    </Box>
    }
  </Box>

}

export default memo(SearchLoader)
