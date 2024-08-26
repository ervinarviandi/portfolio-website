import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { ModeToggle } from "../atoms/ModeToggle"  
  import { TbSettings } from "react-icons/tb";
const sheetsMenu = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>< TbSettings size={25} className='hover:rotate-180 ease-in-out transition-all duration-500'/></SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription className='flex justify-end'>
            <ModeToggle/>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default sheetsMenu