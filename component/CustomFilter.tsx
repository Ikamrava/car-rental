import { type } from 'os'
import React from 'react'

type Props = {
    title: string
}


function CustomFilter({title}: Props) {
    
  return (
    <div>{title}</div>
  )
}

export default CustomFilter