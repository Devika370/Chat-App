import { useEffect, useState } from "react"
import toast from "react-hot-toast";


const useGetConversation = () => {
 const [loading, setLoading] = useState(false);
 const [conversations, setConversations] = useState([]);
 const baseUrl = import.meta.env.VITE_API_URL;

 useEffect (() =>{
    const getConversations = async() =>{
        setLoading(true);
        try {
            const res = await fetch(`${baseUrl}/api/users`);
            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }
            setConversations(data)
        }catch(error){
            toast.error(error.message)
        }finally{
            setLoading(false);
        }
        
    }
    getConversations();
 }, []) 
 return {loading , conversations}
}

export default useGetConversation
