import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  rightIcon? : string,
  isDisabled?: boolean
} 

export interface SearchManuProps {
  manufactures: string;
  setManufacturers: (manufacturers: string) => void;

}

export interface CarProps{
  city_mpg: number,
  class: string,
  combination_mpg: number,
  cylinders: number,
  displacement: number,
  drive: string,
  fuel_type: string,
  highway_mpg: number,
  make: string,
  model: string,
  transmission: string,
  year: number
}

export interface CarDetailsProp{
  isOpen:boolean,
  closeModal:()=>void,
  carInfo: CarProps
}

export interface FilterProps{
  manufacturer:string,
  model:string,
  fuel_type:string,
  year:number
  limit:number,
}


export interface HomeProps {
  searchParams: FilterProps;
}

export interface OptionProps{
  title:string,
  value:string
}

export interface CustomFilterProps {
  title:string,
  options:OptionProps[]
}

export interface ShowMoreProps {
  pageNumber:number,
  isNext:boolean
}




