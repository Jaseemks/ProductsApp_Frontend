import React from 'react'
import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';
import { Link,useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';
// import { useAuthStore } from '../store/authstore';
import useAuthStore from '../store/authstore';
// const {logoutAuth}=useAuthStore();


export default function MyNavbar() {

  const navigate = useNavigate();

  const {logoutAuth}=useAuthStore();

  const toLogout =()=>{
    console.log("logout called");
    logoutAuth();
    toast('logout successfully');
    navigate('/login');

  }

  return (
    <>
    <Box component="section" sx={{ p: 2,backgroundColor:'purple' }}>
          <Stack direction={'row'} spacing={5}  justifyContent={'space-around'}>
              <Link to={'/'}>
              <Typography variant='h5' sx={{color :"white",cursor:"pointer"}}>Home</Typography>
              </Link>
              <Link to={'/add'}>
              <Typography variant='h5' sx={{color :"white",cursor:"pointer"}}>Add Product</Typography>
              </Link>
              <Typography variant='h5' sx={{color :"white",cursor:"pointer"}}onClick={toLogout}>Logout</Typography>
          </Stack>
        
    </Box>
    </>
  )
}
