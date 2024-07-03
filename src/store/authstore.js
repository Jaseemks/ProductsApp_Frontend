
import { create } from 'zustand'
const useAuthStore=create((set)=>({
    isAuth: !!localStorage.getItem('Product token'),
    loginAuth:(token)=>{
        localStorage.setItem('Product token',token);
        set({isAuth:true});
    },
    logoutAuth:()=>{
        localStorage.removeItem('Product token');
        set({isAuth:false});
    },
    checkAuth:()=>{

    }

}))

export default useAuthStore;

