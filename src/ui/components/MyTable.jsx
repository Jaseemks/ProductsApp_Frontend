import { Avatar, Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getProducts,deleteProduct } from '../../apis';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function MyTable() {

  const [list, setlist]=useState([]);
  const navigate = useNavigate()
 
    useEffect(() =>{

      init();
    },[]);
    
 

const init = async ()=>{
try {
  let res = await getProducts()

  setlist(res.data);
} catch (error) {
  throw error;
}

};

const handleDelete = async (id)=>{
  try {
  console.log(id);
  await deleteProduct(id);
  let updatedList = list.filter((list)=>list._id!==id);
  setlist(updatedList);
} catch (error) {
  toast.error(error.response.data.error);
}

};

const handleEdit = async (id)=>{

  navigate(`/edit/${id}`)

};

  return (
    <div>
      <Container>
        <TableContainer>
           <Table>
                             {/* table head */}
            <TableHead>
                <TableRow>
                    <TableCell>SlNo</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Discription</TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Edit</TableCell>
                    <TableCell>Delete</TableCell>
                </TableRow>
            </TableHead>
            
            <TableBody>
              {
                list.map((row,index) =>(
                    <TableRow key={index}>
                      <TableCell>{index+1}</TableCell>
                      <TableCell>{row.title}</TableCell>
                      <TableCell>{row.category}</TableCell>
                      <TableCell>{row.description}</TableCell>
                      <TableCell><Avatar alt="Remy Sharp" src="row.image" /></TableCell>
                      <TableCell>{row.quantity}</TableCell>
                      <TableCell>{row.price}</TableCell>
                      <TableCell><Button onClick={()=>{handleEdit(row._id)}}>Edit</Button></TableCell>
                      <TableCell>
                        <Button onClick={()=>{handleDelete(row._id)}}>Delete</Button>
                      </TableCell>
                    </TableRow>
                ))
              }
            </TableBody>

           </Table>

        </TableContainer>
      </Container>


    </div>
  )
}
