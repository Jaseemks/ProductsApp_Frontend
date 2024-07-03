import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import useLoginStore from '../../store/loginStore'
import {useForm} from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate} from 'react-router-dom';
import { login } from '../../apis';
import useAuthStore from '../../store/authstore';

export default function MyLoginForm() {
  const {setToggle}=useLoginStore();

  const {loginAuth}=useAuthStore();
  const {register,handleSubmit,reset} = useForm();
  const navigate = useNavigate();

  const toLogin = async (data)=>{
    console.log('login data',data);
    try {
      let res = await login(data);
      // localStorage.setItem('Product token',res.token)
      loginAuth(res.token)
      toast("success")
      navigate("/")
    } catch (error) {
      toast(error.response.data.error)
      reset();
    }

  }


  return (
    <div>
        <Box height={300}
          width={500} my={4} mx={4}>
          <form onSubmit={handleSubmit(toLogin)}>
          <Stack spacing={5}>
          <Typography align='center' variant='h3'>Login</Typography>
          <TextField  label="User Name" variant="outlined" {...register("email")}/>
          <TextField  label="Password" variant="outlined" {...register("password")}/>
          <Button variant="contained" type='submit'>Login</Button>
          </Stack>
          </form>
          <Typography align='center' variant='subtitle1'>New? <Link onClick={setToggle}>SignUp</Link></Typography>
          
        </Box>

    </div>
  );
}
