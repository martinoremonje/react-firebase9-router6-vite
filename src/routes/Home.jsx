import { useEffect, useState } from "react";
import useFirestore from "../hooks/useFirestore"
import FormButton from "../components/FormButton";
import ButtonLoading from "../components/ButtongLoading";




const Home = () => {

  const {data, error, loading, getData, addData, deleteData, updateData} = useFirestore();
  const [text, setText] = useState("");
  const [newOriginId, setNewOriginId] = useState()

  useEffect(()=>{
    getData()  
}, [])

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(newOriginId){
      await updateData(newOriginId, text);
      setNewOriginId('');
      setText('');
      return
    }
    console.log(text)
    await addData(text)
    setText("")
  };

  const handleClick = async(nanoid) =>{
    await deleteData(nanoid)
  }

 const handleClickEdit = (i)=>{
  setText(i.origin)
  setNewOriginId(i.nanoid)
 }


  if(loading.getData) return <p>Loading...</p>

  return (
    <>
        <h1 className="text-3xl font-bold underline">Home</h1>

        <form onSubmit={handleSubmit}>
          <input type="text"
                  placeholder="ex: http://example"
                  onChange={e => setText(e.target.value)}
                  value={text} />

                  {
                    newOriginId ? (
                      <FormButton text="Edit URL" color="yellow"/>
                    ) : (
                      loading.addData ? (<ButtonLoading />) : (<FormButton text="Add URL"/>)
                    )
                  }
          
        </form>


        {
          data.map(i =>{
            
              return (
                <div key={i.nanoid}>
                <p>{i.origin}</p>
                <p>{i.nanoid}</p>   
                <p>{i.uid}</p>
                {
                  loading.deleteData ? (<ButtonLoading />) : (<FormButton type="button" text="Delete" color="red" onClick={() => handleClick(i.nanoid)}/>)
                }
                <FormButton type="button" color="yellow" text="Update" onClick={() => handleClickEdit(i)}/>
              </div>
              )
            
          })
        }
    </>
  )
}

export default Home

