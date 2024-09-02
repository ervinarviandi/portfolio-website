import Navigation from '@/components/commons/Navigation'
import React from 'react'
import Link from 'next/link'
import { IoLogoGithub } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import Footer from '@/components/commons/Footer';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
const page = () => {



   

   

  return (
    <>
    <Navigation/>
    <div className='w-full'>
        <div className='lg:max-w-5xl mx-auto px-5'>
                <h2 className='lg:text-5xl text-2xl font-bold pt-16'>Contact</h2>
                <p className='lg:text-lg text-sm mt-5'>A work-from-office workspace that allows me to efficiently complete most tasks.</p>
                <hr className='border-2 border-dashed w-full mt-5' />
            {/* <div className=''>
                {
                    Contact.map(({id, title, icon}) => (
                        <div key={id} className='lg:flex items-center gap-x-2'>
                            <Link href={''} className='flex items-center gap-x-2 py-3 px-4  hover:bg-slate-500 rounded-xl'>{title} {icon}</Link>
                        </div>
                    ))
                }
            </div> */}
          
            {/* Table */}

            <div>
                <h2 className='lg:text-3xl text-2xl font-bold mt-10 mb-5 '>Contact</h2>
            <Table className='border rounded-b-lg'>
        <TableCaption>a list contact </TableCaption>
        <TableHeader className=' border'>
          <TableRow className=''>
            <TableHead  className="w-[100px]">Contact</TableHead>
            <TableHead className=''>Detail</TableHead>
            {/* <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody className='border'>
          <TableRow className='border'>
            <TableCell className="font-medium">Adress</TableCell>
            <TableCell>Lombok, Indonesia</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Email</TableCell>
            <TableCell><Link href="mailto:muhamadervin34@gmail.com" className='dark:text-sky-400 text-sky-500'>muhamadervin34@gmail.com</Link></TableCell>
          </TableRow>
        </TableBody>
      </Table>
            </div>
            {/* AKhir Table */}



            {/* Table Social Media */}
            <div>
                <h2 className='lg:text-3xl text-2xl font-bold mt-10 mb-5 '>Social Media</h2>
                <Table className='border rounded-b-lg'>
        <TableCaption>a list contact </TableCaption>
        <TableHeader className=' border'>
          <TableRow className=''>
            <TableHead  className="w-[100px]">Contact</TableHead>
            <TableHead className=''>Detail</TableHead>
            {/* <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody className='border'>
          <TableRow className='border'>
            <TableCell className="font-medium">Linkedin</TableCell>
            <TableCell>Lombok, Indonesia</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Instagram</TableCell>
            <TableCell><Link href="mailto:muhamadervin34@gmail.com" className='dark:text-sky-400 text-sky-500'>muhamadervin34@gmail.com</Link></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Github</TableCell>
            <TableCell><Link href="https://github.com/ervinarviandi" className='dark:text-sky-400 text-sky-500'>https://github.com/ervinarviandi</Link></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Instagram</TableCell>
            <TableCell><Link href="mailto:muhamadervin34@gmail.com" className='dark:text-sky-400 text-sky-500'>muhamadervin34@gmail.com</Link></TableCell>
          </TableRow>
        </TableBody>
      </Table>
            </div>
            {/* Akhir Table Social Media */}



        </div>
    </div>
    <Footer/>
    </>
  )
}

export default page