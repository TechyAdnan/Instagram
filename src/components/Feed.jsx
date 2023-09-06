import React, { useState } from 'react'
import {Box, Skeleton, Stack } from '@mui/material'
import Post from './Post/Post';
import Post2 from './Post/Post2';
import Post3 from './Post/Post3';
import Post4 from './Post/Post4';
import Post5 from './Post/Post5';
import Post6 from './Post/Post6';




const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);
  return (
    <Box  flex={3.5} padding={2}  >
       {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
       <Post/>
       <Post2/>
       <Post3/>
       <Post4/>
       <Post5/>
       <Post6/>
       
       </>
        )}
    </Box>
  )
}

export default Feed
