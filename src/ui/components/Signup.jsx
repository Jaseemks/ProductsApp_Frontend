import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import useLoginStore from '../../store/loginStore';
import {useForm} from 'react-hook-form';
import { toast } from 'react-toastify';
import { signup } from '../../apis';

export default function Signup() {
  const {setToggle}=useLoginStore();
  const {register,handleSubmit,reset} = useForm();

  
  const toSignup = async (data)=>{
    console.log('sign up data',data);
    try {
      let res = await signup(data);
      // localStorage.setItem('Product token',res.token)
      // loginAuth(res.token)
      toast("success")
      // navigate("/")
    } catch (error) {
      toast(error.response.data.error)
      reset();
    }

  }

  return (
    <div>
    <Box height={300}
  width={500} my={4} mx={4}>


       <form onSubmit={handleSubmit(toSignup)}>    
      <Stack spacing={5}>
      <Typography align='center' variant='h3'>SignUp</Typography>
      <TextField  label="User Name" variant="outlined" {...register("email")}/>
      <TextField  label="New Password" variant="outlined" {...register("password")} />
      <TextField  label="Confirm Password" variant="outlined" />
      <Button variant="contained" type='submit'>SignUp</Button>
      </Stack>
      </form>
      <Typography align='center' variant='subtitle1'>
        Already a User? <Link onClick={setToggle}>Login</Link></Typography>
    </Box>

    

</div>
  )
}
