import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
const table = () => {
  return (
    <div className=''>
          <Table className='border rounded-b-lg'>
        <TableCaption>a list advan workplus setup </TableCaption>
        <TableHeader className=' border'>
          <TableRow className=''>
            <TableHead  className="w-[100px]">Name</TableHead>
            <TableHead className=''>Detail</TableHead>
            {/* <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody className='border'>
          <TableRow className='border'>
            <TableCell className="font-medium">OS</TableCell>
            <TableCell>Windows 11 Home</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Model</TableCell>
            <TableCell>Advan Workplus</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Proccessor</TableCell>
            <TableCell>AMD RYZEN 5 6600H with Radeon Graphics</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">RAM</TableCell>
            <TableCell>16GB</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">GPU</TableCell>
            <TableCell>6-Core / 12-Thread</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Storage</TableCell>
            <TableCell>512GB SSD</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default table