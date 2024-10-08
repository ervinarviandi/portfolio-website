"use client"
import Navigation from '@/components/commons/Navigation'
import React from 'react'
import Link from 'next/link'
import { IoLogoGithub } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion"
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
    <motion.section className='w-full' initial={{ y: 250 }} animate={{ y: -10 }} transition={{  type: "spring" }}>
        <div className='lg:max-w-5xl mx-auto px-5 pt-10'>
                <h2 className='lg:text-5xl text-2xl font-bold pt-16'>Contact</h2>
                <p className='lg:text-lg text-sm mt-5   dark:text-[#777777]'> Get in touch with me anytime, through social media, e-mail, or phone number 👋.</p>
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
                <h2 className='lg:text-3xl text-2xl font-bold mt-10 mb-5  '>Contact</h2>
            <Table className='border rounded-b-lg'>
        <TableCaption  className='dark:text-[#777777]  text-[#758498]'>a list contact </TableCaption>
        <TableHeader className=' border'>
          <TableRow className=''>
            <TableHead  className="w-[100px] dark:text-[#777777]  text-[#758498]">Contact</TableHead>
            <TableHead className='dark:text-[#777777]  text-[#758498]'>Detail</TableHead>
            {/* <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody className='border'>
          <TableRow className='border'>
            <TableCell className="font-medium">Address</TableCell>
            <TableCell>Lombok, Indonesia</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Email</TableCell>
            <TableCell><Link href="mailto:muhamadervin34@gmail.com" className=' text-[#7bf080]'>muhamadervin34@gmail.com</Link></TableCell>
          </TableRow>
        </TableBody>
      </Table>
            </div>
            {/* AKhir Table */}

            {/* Table Social Media */}
            <div>
              <h2 className='lg:text-3xl text-2xl font-bold mt-10 mb-5 '>Social Media</h2>
                <Table className='border rounded-b-lg'>
                <TableCaption className='dark:text-[#777777]  text-[#758498]'>a list social media </TableCaption>
                <TableHeader className=' border'>
                  <TableRow className=''>
                    <TableHead  className="w-[100px] dark:text-[#777777]  text-[#758498]">Contact</TableHead>
                    <TableHead className=' dark:text-[#777777]  text-[#758498]'>Detail</TableHead>
                    {/* <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead> */}
                  </TableRow>
                </TableHeader>
                <TableBody className='border'>
                  {/* <TableRow className='border'>
                    <TableCell className="font-medium">Linkedin</TableCell>
                    <TableCell>Lombok, Indonesia</TableCell>
                  </TableRow> */}
                  <TableRow>
                    <TableCell className="font-medium">Instagram</TableCell>
                    <TableCell><Link href="https://www.instagram.com/ervinarviandi/" className='text-[#7bf080] '>https://www.instagram.com/ervinarviandi/</Link></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Github</TableCell>
                    <TableCell><Link href="https://github.com/ervinarviandi" className='dark:text-[#7bf080] text-[#7bf080]'>https://github.com/ervinarviandi</Link></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">X</TableCell>
                    <TableCell><Link href="https://x.com/EArviandi" className=' text-[#7bf080]'>https://x.com/EArviandi</Link></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            {/* Akhir Table Social Media */}



        </div>
    </motion.section>
    <Footer/>
    </>
  )
}

export default page