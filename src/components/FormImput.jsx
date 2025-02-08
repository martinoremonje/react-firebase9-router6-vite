import { forwardRef } from "react"


const FormInput = forwardRef(({type, placeholder, onChange, label, error, onBlur, name},ref) => { 

        const errorClass = "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-red-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
        const errorClassLabel = "block mb-2 text-sm font-medium text-red-700 dark:text-red-500"

    return( <div className="mb-4">
                <label
                htmlFor="email"
                className={error ? errorClassLabel : "block mb-2 text-sm font-medium text-gray-900 dark:text-white"}
                        >
                        {label}
                </label>

            <input className={error ? errorClass : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} type={type} placeholder={placeholder} ref={ref} onChange={onChange} onBlur={onBlur} name={name}/>
            </div>
    )
 });

 FormInput.displayName = 'FormInput';

export default FormInput