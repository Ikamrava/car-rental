import { CarDetailsProp } from '@/Types'
import React from 'react'
import Image from 'next/image'
import { Fragment } from 'react'
import {Dialog, Transition} from '@headlessui/react'



function Cardetails({carInfo,isOpen,closeModal}:CarDetailsProp) {
  return (
    <>
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className=" relative z-10" onClose={closeModal}>
           <Transition.Child className=" fixed inset-0 bg-black/30 bg-opacity-25">
             
           </Transition.Child>
        </Dialog>
    </Transition>

    </>
  )
}

export default Cardetails