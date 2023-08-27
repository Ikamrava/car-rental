"use client"
import { CustomButtonProps } from "@/Types"
import Image from "next/image"

function CustomButton({title,containerStyles,handleClick,btnType,rightIcon,isDisabled}:CustomButtonProps) {
  return (
    <button disabled={false} type={btnType} className={`custom-btn  ${containerStyles}`} onClick={handleClick}>
        <span className={"flex-1"}>{title}</span>
        {rightIcon && (
          <div className=" relative w-6 h-6">
            <Image src={rightIcon} layout="fill" objectFit="contain" alt="right-icon" priority={true} />
          </div>
        )}
         </button>
  )
}

export default CustomButton