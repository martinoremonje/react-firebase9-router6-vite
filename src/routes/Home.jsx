import { useEffect, useState } from "react";
import useFirestore from "../hooks/useFirestore"
import FormButton from "../components/FormButton";
import ButtonLoading from "../components/ButtongLoading";
import { formValidate } from "../utils/formValidate";
import FormInput from "../components/FormImput";
import FormError from "../components/FormError";
import { useForm } from "react-hook-form";
import Loading from "../components/ButtonLoading";



const Home = () => {

  const {data, loading, getData, addData, deleteData, updateData} = useFirestore();
  const [newOriginId, setNewOriginId] = useState();

  const {required, patternUrl} = formValidate();
  const {register, handleSubmit, formState: {errors}, setError, resetField, setValue} = useForm();

  const pathURL = window.location.href

  useEffect(()=>{
    getData()  
}, [])

const onSubmit = async({url, name}) => {
  try {
    if (newOriginId) {
      await updateData(newOriginId, url, name);

      setNewOriginId('');
      return;
    } else {
      await addData(url, name);
    } 
  } catch (error) {
    console.log(error);
  } finally {
    resetField("url");
    resetField("name");
  }
};


  const handleClick = async(nanoid) =>{
    await deleteData(nanoid)
  }

 const handleClickEdit = (i)=>{
  setValue("url", i.origin);
  setValue("name", i.name);
  setNewOriginId(i.nanoid)
 };

 const handleClickCopy = async(i) =>{
      await navigator.clipboard.writeText(window.location.href + i)
 }


  if(loading.getData) {
    return <Loading />
    
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline mb-5 text-center">URL Saver</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <FormInput
  type="text"
  error={errors.url}
  placeholder="ex: http://example"
  label="Ingresa URL"
  {...register("url", {
    required,
    pattern: patternUrl
  })}
/>
<FormInput
  type="text"
  error={errors.name}
  placeholder="The office capitulo incendio"
  label="Ingresa Seudónimo"
  {...register("name", {
    required
  })}
/>
<FormError error={errors.url} />
<FormError error={errors.name} />

        {newOriginId ? (
          <FormButton text="Edit URL" color="purple" />
        ) : (
          loading.addData ? (<ButtonLoading />) : (<FormButton text="Add URL" color="green" />)
        )}
      </form>

      <div className="mt-6 space-y-4">
        {data.map(i => (
          <div key={i.nanoid} className="p-4 bg-white border  border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pathURL}{i.nanoid}</h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 truncate">{i.origin}</p>
            <p className="mb-3 font-bold text-gray-900 dark:text-gray-900 truncate">{i.name}</p>
            <div className="flex justify-end space-x-1.5">
              {loading.deleteData ? (<ButtonLoading />) : (<FormButton type="button" text="Delete" color="red" onClick={() => handleClick(i.nanoid)} />)}
              <FormButton type="button" color="purple" text="Update" onClick={() => handleClickEdit(i)} />
              <FormButton type="button" color="blue" text="Copy" onClick={() => handleClickCopy(i.nanoid)} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home

