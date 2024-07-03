import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import useLoginStore from '../../store/loginStore';

export default function Signup() {
  const {setToggle}=useLoginStore();
  return (
    <div>
    <Box height={300}
  width={500} my={4} mx={4}>
    
      <Stack spacing={5}>
      <Typography align='center' variant='h3'>SignUp</Typography>
      <TextField  label="User Name" variant="outlined" />
      <TextField  label="New Password" variant="outlined" />
      <TextField  label="Confirm Password" variant="outlined" />
      <Button variant="contained">SignUp</Button>
      </Stack>
      <Typography align='center' variant='subtitle1'>Already a User? <Link onclick={setToggle}>Login</Link></Typography>
    </Box>

    

</div>
  )
}
