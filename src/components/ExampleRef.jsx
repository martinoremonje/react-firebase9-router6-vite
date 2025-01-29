import { forwardRef, useRef } from "react"


const InputText = forwardRef((props,ref)=>{
    return (
        <>
            <input type="text" ref={ref}/>
        </>
    );
});

InputText.displayName = "InputText"


const Examplered = () => { 

    const inputFocus = useRef(null);

    const handleClickButton = () => { 
        inputFocus.current.focus();
     }

    return (<>
        <InputText ref={inputFocus} />
        <button onClick={handleClickButton}>Click</button>
    </>)
 }

export default Examplered