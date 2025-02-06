import { db } from "../firebase.js";
import { setDoc, collection, doc, getDocs, query, where, deleteDoc, updateDoc } from "firebase/firestore"; 
import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider.jsx";
import { nanoid } from "nanoid";



const useFirestore = () => { 

    
    const [data, setData] = useState([]);
    const [error,setError] = useState();
    const [loading, setLoading] = useState({});
    const {user} = useContext(UserContext);
    
   
    

    const getData = async() =>{
        try {
            setLoading((prev) => ({...prev, getData: true}));
            const dataRef = collection(db, "urls");
            const q = query(dataRef, where("uid", "==", user.uid))
            const querySnapshot = await getDocs(q);       
            const dataDb = querySnapshot.docs.map(doc => (doc.data()))
            setData(dataDb)
        } catch (error) {
            console.log(error);
            setError(error.message)
        } finally{
            setLoading((prev) => ({...prev, getData: false}));
        }
        
    };

    const addData = async(url) =>{
        try {
            setLoading((prev) => ({...prev, addData: true}));
            
            const newDoc = {
                enabled: true,
                nanoid: nanoid(6),
                origin: url,
                uid: user.uid
            }
            const docRef = doc(db, "urls", newDoc.nanoid);
            await setDoc(docRef, newDoc);
            setData([...data, newDoc])
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading((prev) => ({...prev, addData: false}));
        }
    };

    const deleteData = async (nanoid) => {
        try {
            setLoading((prev) => ({...prev, deleteData: true}));
            const docRef = doc(db, "urls", nanoid);
            await deleteDoc(docRef);
            setData(data.filter(i => i.nanoid !== nanoid))
        } catch (error) {
            setError(error.message)
        } finally{
            setLoading((prev) => ({...prev, deleteData: false}));
        }
    };

    const updateData = async (nanoid, newOrigin) =>{
        try {
            const docRef = doc(db, "urls", nanoid);
            await updateDoc(docRef, {
                origin: newOrigin
            });
            setData(prevData => 
                prevData.map(item => 
                    item.nanoid === nanoid ? { ...item, origin: newOrigin } : item
                )
            );
        } catch (error) {
            setError(error.message)
        }
    }



    return {
        data, error, loading, getData, addData, deleteData, updateData
    }
 };

export default useFirestore