import React, {useId} from 'react'

function Select({
    options,
    label,
    className = "",
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select {...props} id={id} ref={ref} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
            {/* the "options?.map()" is used to loop only if a value is present in opption, if a value ain't present in optin then it won't loop. it is used to avoid crashing due to no value in loop */}
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

// in the input.jsx 'React.forwardRef' is used, it can also be used as in on the lower line
export default React.forwardRef(Select)