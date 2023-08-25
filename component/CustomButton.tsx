"use client"
import { CustomButtonProps } from "@/Types"

function CustomButton({title,containerStyles,handleClick,btnType}:CustomButtonProps) {
  return (
    <button disabled={false} type={btnType} className={`custom-btn  ${containerStyles}`} onClick={()=>{}}>
        <span className={"flex-1"}>{title}</span>
         </button>
  )
}

export default CustomButton