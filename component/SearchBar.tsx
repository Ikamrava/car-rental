"use client"

import { useState } from "react"
import SearchMan from "./SearchMan"



function SearchBar() {

    const [manufacturers, setManufacturers] = useState("")

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchMan setManufacturers={setManufacturers} manufactures={manufacturers}/>
        </div>
    </form>
  )
}

export default SearchBar