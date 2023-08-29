"use client"

import { useState } from "react"
import SearchMan from "./SearchMan"
import Image from "next/image"


const SearchButton = ({otherClasses}:{otherClasses:string}) => {
    return (
        <button type="submit" className={`-ml-3 z-10 ${otherClasses} `}>
          <Image src="/magnifying-glass.svg" alt="Search" width={40} height={40} className=" object-contain"   ></Image>
        </button>
    )
}


function SearchBar() {

    const [manufacturers, setManufacturers] = useState("")
    const [model, setModel] = useState("")

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchMan setManufacturers={setManufacturers} manufactures={manufacturers}/>
            <SearchButton otherClasses="sm:hidden"/>
        </div>
        <div className=" searchbar__item">
          <Image src="/model-icon.png" alt="Model" width={20} height={20} className=" absolute  ml-4 "   ></Image>
          <input type="text" name="modle" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Tiguan" className="searchbar__input" />
          <SearchButton otherClasses="sm:hidden"/>
        </div>
        <SearchButton otherClasses="max-sm:hidden"/>
    </form>
  )
}

export default SearchBar