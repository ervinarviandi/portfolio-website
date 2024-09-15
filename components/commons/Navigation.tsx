"use client"
import React from "react"
import Logo from "@/public/ervinarviandi.jpg"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { RiCloseFill } from "react-icons/ri"
import { HiMenu } from "react-icons/hi"
import { useTheme } from "next-themes"
import { BiHomeSmile } from "react-icons/bi"
import { BiCommentDetail } from "react-icons/bi"
import { LiaBlogSolid, LiaBoxSolid } from "react-icons/lia"
import { MdOutlineDashboard, MdOutlineContactless } from "react-icons/md"
import { FiUser } from "react-icons/fi"
import { ModeToggle } from "../atoms/ModeToggle"
import SheetsMenu from "../atoms/sheetsMenu"

const Navigation = () => {
  const [isLoading, setLoading] = useState(true)

  const [nav, setNav] = useState(false)
  const [color, setColor] = useState("transparent")
  const [textColor, setTextColor] = useState("transparent")

  const handleNav = () => {
    setNav(!nav)
  }

  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#transparent")
        setTextColor("#ffffff")
      } else {
        setColor("#transparent")
        setTextColor("#ffffff")
      }
    }
    window.addEventListener("scroll", changeColor)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null
    const currentTheme = theme === "system" ? systemTheme : theme
    if (currentTheme === "dark") {
      return (
        <button
          className=" rounded-full p-2"
          aria-label="button"
          onClick={() => setTheme("light")}
        >
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </button>
      )
    } else {
      return (
        <button
          className=" rounded-full p-2 "
          aria-label="button"
          onClick={() => setTheme("dark")}
        >
         <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </button>
      )
    }
  }
  return (
    <>
      <header className="lg:relative fixed lg:bg-transparent dark:text-white myNavigation  lg:z-10 z-50 w-full lg:bg-background-light/70 bg-backgroundlight/70 py-4 lg:backdrop-blur-none  duration-300 ease-in  dark:bg-backgrounddark/70 ">
        <div
          className="mx-auto flex items-center justify-between
         px-4 lg:max-w-5xl"
        >
          <div className="flex items-center justify-center gap-2 ">
            <Link href="/" className="flex items-center gap-2" >
            <Image
              src={Logo}
              width={30}
              height={30}
            
              className={`
                duration-700 ease-in-out group-hover:opacity-75  rounded-full border-2 dark:border-gray-800 border-gray-300
                ${
                  isLoading
                    ? "scale-110 blur-2xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
                })`}
              onLoad={() => setLoading(false)}
              alt="profileMobile"
             
            />
            <h1 className="text-lg font-bold">Ervin Arviandi</h1>
              </Link>
          </div>

          <div className="item-center flex">
            <ul className="ml-5 hidden items-center gap-3 lg:flex rounded-full px-3 py-3 border backdrop-blur-md">
              <li>
                <Link
                  href="/about"
                  className="link link-underline link-underline-black pb-2 text-sm text-white-100 dark:text-dark-100"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  className="link link-underline link-underline-black pb-2 text-sm text-white-100 dark:text-dark-100"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="link link-underline link-underline-black pb-2 text-sm text-white-100 dark:text-dark-100"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="link link-underline link-underline-black pb-2 text-sm text-white-100 dark:text-dark-100"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/studio"
                  className="link link-underline link-underline-black pb-2 text-sm text-white-100 dark:text-dark-100 "
                >
                  Studio
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/dashboard"
                  className="link link-underline link-underline-black pb-2 text-sm text-white-100 dark:text-dark-100 "
                >
                  Dashboard
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <div className="flex items-center justify-center gap-2">
              <div className="lg:hidden md:hidden flex">
            {/* {renderThemeChanger()} */}
              </div>
              {/* <div className="hidden lg:block">{renderThemeChanger()}</div> */}
              <div className="hidden lg:flex items-center gap-x-2"><ModeToggle/><SheetsMenu/></div>

              <div onClick={handleNav} className=" dark: z-50 block lg:hidden ">
                {nav ? (
                  <RiCloseFill
                    className="h-6 w-6 "
                    //  style={{ color: `${textColor}` }}
                  />
                ) : (
                  <HiMenu
                    className="h-6 w-6"
                    // style={{ color: `${textColor}` }}
                  />
                )}
              </div>
            </div>
            <div
              className={
                nav
                  ? "absolute  backdrop-blur-md important bottom-0 left-0 right-0 top-0 z-40 h-screen w-full items-center gap-3   bg-white dark:bg-[#131313]  duration-300  ease-in  sm:hidden"
                  : "dark:bg-[#0a0a0a] bg-white dark:text-white absolute bottom-0 left-[-100%] right-0 top-0 z-40 h-screen w-full items-center  backdrop-blur-md   duration-300 ease-in sm:hidden    "
              }
            >
              <div className="px-10 ">
                <div className="mt-4 flex items-center justify-between gap-2">
                  <div className="flex items-center justify-center gap-2">
                    <Image
                      src={Logo}
                      width={30}
                      height={30}
                      className="rounded-full"
                      alt="profileMobile"
                    />
                    <h1 className="text-lg font-bold">Ervin Arviandi</h1>
                    
                  </div>
                  <div className="p-1.2 dark:hover:bg-[#525252] hover:bg-[#dedddd] rounded-lg">
                    {renderThemeChanger()}
                    </div>
                </div>
                <hr className="border-1 my-5 border-solid border-white-100 dark:border-[#525252]" />
                <ul className="mt-10 ">
                  <li className="p-2 px-4 text-2xl group">
                    <Link
                      href="/"
                      className="link link-underline link-underline-black border-1 flex items-center gap-2 border-b  border-dashed  border-[#525252]  pb-2 text-white-100 dark:border-dark-100 dark:text-dark-100  "
                    >
                      <BiHomeSmile size={20} className="group-hover:rotate-12 duration-300 transition-all"/>
                      Home
                    </Link>
                  </li>
                  <li className="p-2 px-4 text-2xl group">
                    <Link
                      href="/about"
                      className="link link-underline link-underline-black border-1 flex items-center gap-2 border-b  border-dashed  border-[#525252]  pb-2 text-white-100 dark:border-dark-100 dark:text-dark-100  "
                    >
                      <FiUser size={20} className="group-hover:rotate-12 duration-300 transition-all"/>
                      About
                    </Link>
                  </li>
                  <li className="p-2 px-4 text-2xl    group">
                    <Link
                      href="/works"
                      className="link link-underline link-underline-black border-1 flex items-center gap-2 border-b  border-dashed  border-[#525252]  pb-2 text-white-100 dark:border-dark-100 dark:text-dark-100  "
                    >
                      <LiaBoxSolid size={20} className="group-hover:rotate-12 duration-300 transition-all"/>
                      Projects
                    </Link>
                  </li>
                  <li className="p-2 px-4 text-2xl   group ">
                    <Link
                      href="/blog"
                      className="link link-underline link-underline-black border-1 flex items-center gap-2 border-b border-dashed  border-[#525252]  pb-2 text-white-100 dark:border-dark-100 dark:text-dark-100"
                    >
                      <BiCommentDetail size={20} className="group-hover:rotate-12 duration-300 transition-all"/>
                      Blog
                    </Link>
                  </li>
                  <li className="p-2 px-4 text-2xl   group">
                    <Link
                      href="/contact"
                      className="link link-underline link-underline-black border-1 flex items-center gap-2 border-b border-dashed  border-[#525252]  pb-2 text-white-100 dark:border-dark-100 dark:text-dark-100"
                    >
                      <MdOutlineContactless size={20} className="group-hover:rotate-12 duration-300 transition-all"/>
                      Contact
                    </Link>
                  </li>
                  {/* <li className="p-2 px-4 text-2xl  group ">
                    <Link
                      href="/myBlog"
                      className="link link-underline link-underline-black border-1 flex items-center gap-2 border-b border-dashed  border-[#525252]  pb-2 text-white-100 dark:border-dark-100 dark:text-dark-100"
                    >
                      <LiaBlogSolid size={20} className="group-hover:rotate-12 duration-300 transition-all"/>
                      Blog
                    </Link>
                  </li> */}
                  <li className="p-2 px-4 text-2xl group  group">
                    <Link
                      href="/studio"
                      className="link link-underline link-underline-black border-1 flex items-center gap-2 border-b border-dashed  border-[#525252]  pb-2 text-white-100 dark:border-dark-100 dark:text-dark-100"
                    >
                      <MdOutlineDashboard size={20} className="group-hover:rotate-12 duration-300 transition-all"/>
                      Studio
                    </Link>
                  </li>
                  {/* <div className="">
          <Icons/>
        </div> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navigation