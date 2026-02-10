interface InputInterface {
    type: string,
    placeholder: string,
    className?: string
}

export default function Input({type, placeholder, className} : InputInterface) {
  return(
    <div className={`relative ${className}`}>
        {type === "textarea" ?
        <textarea rows={10} cols={4} id={type} placeholder=" " className="relative w-full px-2 py-3 border-2 border-black outline-none peer rounded-sm" />
        :
        <input type={type} id={type} placeholder=" " className="relative w-full px-2 py-3 border-2 border-black outline-none peer rounded-sm" />}
        <label htmlFor={type} 
            className="
                absolute top-4 left-3 text-sm duration-400 px-2 rounded-sm
                peer-focus:-top-2.5
                peer-focus:bg-white
                peer-placeholder-shown:top-4
                peer-placeholder-shown:left-3
                peer-not-placeholder-shown:-top-2.5
                peer-not-placeholder-shown:bg-white
                text-gray-800
                
            "
        >{placeholder}</label>
    </div>
  )
}
