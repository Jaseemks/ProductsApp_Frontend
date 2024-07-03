import { useEffect } from 'react'
import MyNavbar from '../ui/MyNavbar'
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'; 
import { toast } from 'react-toastify';
import { addProduct, getProductsById, updateProduct} from '../apis';
import { useParams } from 'react-router-dom';


export default function FormPage() {
    const {register,handleSubmit,reset,setValue} = useForm();

    const {id} = useParams();
    const isEdit = Boolean(id);

    const loadData = async ()=>{
        if(!isEdit) return;
        try {
            let res=await getProductsById(id);
            let formData = res.data;
            Object.keys(formData).forEach((key)=>{
                setValue(key,formData[key]);
            });
            

            
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.error);
        }
    }

useEffect(() => {
    loadData();
}, [id]);



    const onSubmit= async (data) => {

        //for adding image formdata is a tool in javascript to change a form in to jason

        // const data = new data();

        // Object.keys(data).forEach((key)=>{
        //     data.append(key, data[key]);
        // });


        // const fileInput = document.getElementById("image");
        // if(fileInput && fileInput.files[0]){
        //     formData.append("image", fileInput.files[0]);
        // }
        data.image='https://images.app.goo.gl/ap8SWwEF6ZwCn31x9';
        try {
      let res =  !isEdit?    await addProduct(data) : await updateProduct(data);
      console.log(res.data);
            toast("success")
            console.log(data);
            reset();
        } catch (error) {
            if(error.code===401){
                toast.error('Unauthorized')
            }
            toast.error(error.response.data.error);
        }

    };

    //********************************************************************************************* */
    // const onEdit= async (data) => {

    //     //for adding image formdata is a tool in javascript to change a form in to jason

    //     // const data = new data();

    //     // Object.keys(data).forEach((key)=>{
    //     //     data.append(key, data[key]);
    //     // });


    //     // const fileInput = document.getElementById("image");
    //     // if(fileInput && fileInput.files[0]){
    //     //     formData.append("image", fileInput.files[0]);
    //     // }
    //     data.image='https://images.app.goo.gl/ap8SWwEF6ZwCn31x9';
    //     try {
    //         await updateProduct(data)
    //         toast("success")
    //         console.log(data);
    //         reset();
    //     } catch (error) {
    //         toast.error(error.response.data.error);
    //     }

    // }; 
    //****************************************************************************************************************** */

  return (
<div>
        <MyNavbar/>
        <Container>
            <Box sx={{margin :5,bgcolor:'#d7d7d7',padding:5}}>

                <Paper elevation={24}/>
                if(isEdit)
                <Typography align='center' variant='h2'>
                    {isEdit?'Edit Product':'Add Product'}
                </Typography>

{/* **************************************************************************************************************** */}

                  {/* <form onSubmit={handleSubmit(!isEdit?onSubmit:onEdit)}> */}

 {/* *******************************************************************************************************************                  */}

                  <form onSubmit={handleSubmit(onSubmit)}>

                      <Grid container spacing={2.5}>
                          <Grid item sm={12}>
                              <Typography variant='h5'>Upload Image</Typography>
                              <input type='file' name='image' id='image' ></input>
                          </Grid>
                          <Grid item sm={12}>
                              <TextField id="outlined-basic" label="Title" variant="outlined" {...register("title")} />
                          </Grid>
                          <Grid item sm={12}>
                              <TextField id="outlined-basic" label="category" variant="outlined" {...register("category")} />
                          </Grid>
                          <Grid item sm={12}>
                              <TextField id="outlined-basic" label="Description" variant="outlined" {...register("discription")} />
                          </Grid>
                          <Grid item sm={12}>
                              <TextField id="outlined-basic" label="Quantity" variant="outlined" {...register("quantity")} /> 
                          </Grid>
                          <Grid item sm={12}>
                              <TextField id="outlined-basic" label="price" variant="outlined" {...register("price")} /> 
                          </Grid>
                          <Grid item sm={12}>
                          <Button variant="contained" type='submit' color="success">
                          {isEdit?'Update':'Add'}
                          </Button>
                          </Grid>
                      </Grid>
                  </form>
            </Box>
        </Container>
    </div>
  )
}
