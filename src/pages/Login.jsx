
import MyLoginForm from '../ui/components/MyLoginForm'
import Signup from '../ui/components/Signup'
import useLoginStore from '../store/loginStore';
import { Box } from '@mui/material';

export default function Login() {

    const { isToggle } = useLoginStore()


    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height:'100vh' }}>
                {
                    isToggle ? <MyLoginForm /> : <Signup />
                }


            </Box>



        </div>

    );
}

 