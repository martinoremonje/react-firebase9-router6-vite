import { db } from "../firebase.js";
import { setDoc, collection, doc, getDocs, query, where, deleteDoc, updateDoc, getDoc } from "firebase/firestore"; 
import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider.jsx";
import { nanoid } from "nanoid";



const useFirestore = () => { 

    
    const [data, setData] = useState([]);
    const [error,setError] = useState();
    const [loading, setLoading] = useState({});
    const {user} = useContext(UserContext);
    
   
    

    const getData = async () => {
        try {
            setLoading((prev) => ({...prev, getData: true}));
            const dataRef = collection(db, "urls");
            const q = query(dataRef, where("uid", "==", user.uid));
            const querySnapshot = await getDocs(q);
            const dataDb = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setData(dataDb);
        } catch (error) {
            console.error(error);
            setError(error.message);
        } finally {
            setLoading((prev) => ({...prev, getData: false}));
        }
    };
    
    const addData = async(url, name) => {
        try {
          setLoading((prev) => ({...prev, addData: true}));
          
          if (!name) {
            throw new Error("El campo 'name' no puede estar vacío");
          }
      
          const newDoc = {
            enabled: true,
            nanoid: nanoid(6),
            origin: url,
            uid: user.uid,
            name
          };
          console.log('Adding document:', newDoc); // Añade este log para depurar
      
          const docRef = doc(db, "urls", newDoc.nanoid);
          await setDoc(docRef, newDoc);
          setData([...data, newDoc]);
        } catch (error) {
          console.error("Error adding document:", error);
          setError(error.message);
        } finally {
          setLoading((prev) => ({...prev, addData: false}));
        }
      };
      
    
    const updateData = async (nanoid, newOrigin, newName) => {
        try {
            const docRef = doc(db, "urls", nanoid);
            await updateDoc(docRef, {
                origin: newOrigin,
                name: newName
            });
            setData(prevData => 
                prevData.map(item => 
                    item.nanoid === nanoid ? { ...item, origin: newOrigin, name: newName } : item
                )
            );
        } catch (error) {
            console.error(error);
            setError(error.message);
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

    

        const searchData = async(nanoid) =>{
            try {
                const docRef = doc(db, "urls", nanoid);
                const docSnap = await getDoc(docRef);

                return docSnap
            } catch (error) {
                setError(error.message)
            }
        }


    return {
        data, error, loading, getData, addData, deleteData, updateData, searchData
    }
 };

export default useFirestore