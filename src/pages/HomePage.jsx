import React from 'react'
import MyNavbar from '../ui/MyNavbar'
import MyTable from '../ui/components/MyTable'
import { Box, Container, Paper } from '@mui/material'

export default function HomePage() {
  return (
    <div>
        <MyNavbar/>
        <Container>
            <Box sx={{margin :5,bgcolor:'#d7d7d7',padding:5}}>

                <Paper elevation={24}/>
                <MyTable/>
            </Box>
        </Container>
    </div>
  )
}
