'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import ResponsiveRender from './ResponsiveRender';

import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";

import { useState, useRef, useEffect  } from "react";
import ContactButton from "./ContactButton";
export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const pathname = usePathname();
    const searchRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
        if (
            searchRef.current &&
            !searchRef.current.contains(event.target)
        ) {
            setShowSearch(false);
        }
        }

        if (showSearch) {
        document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    },[isOpen, showSearch]);
    const defautNavClasses = "border-solid border-[#f0f3fe]  border-b-[2px] h-[65px] flex items-center px-[5px] text-[#7c828f] font-[400] text-[16px] uppercase"
    return(
        <>
            <header className="h-[50px] min-h-fit items-center flex flex-row justify-between px-[20px] md:px-[40px] shadow-xs relative bg-[#f0f3fe]">
               <ResponsiveRender breakpoint={768}
                mobile={
                    <>
                       <div className="menu_icon">
                           <button
                                aria-label="menu"
                                onClick={() => {setIsOpen(true); setShowSearch(false);}}
                            >
                            <IoMenuOutline size={26}/>
                            </button>
                       </div>
                    </>
                 }
               />
                <div className="flex items-center gap-4">
                    <div className="logo">
                        {/* <Link href="/" className="font-black text-[2rem]">
                            <Image
                                src='/images/homiy.png'
                                width={80}
                                height={60}
                                alt="logo"
                                className="h-auto object-contain"
                                loading="eager"
                            />
                            DIGIELABS
                        </Link> */}
                         <Link href="/" className="text-2xl font-extrabold text-black tracking-tighter block">
                            Digie<span className="text-blue-500">LABS.</span>
                         </Link>
                    </div>
                   
                </div>
                 <ul className="navLinks flex item-center items-center gap-5 desktop_nav_links">
                        <li className="flex items-center">
                            <Link href={'/'} className={`${defautNavClasses} ${pathname === "/" ? "active" : ''}`} >Home</Link>
                        </li>
                        <li className="flex items-center">
                            <Link href={'/about'} className={`${defautNavClasses} ${pathname === "/about" ? "active" : ''}`} >About</Link>
                        </li>
                        <li className="flex items-center">
                            <Link href={'/services'} className={`${defautNavClasses} ${pathname === "/services" ? "active" : ''}`} >Services</Link>
                        </li>
                    </ul>
                <ResponsiveRender breakpoint={768}
                    mobile={
                        <>
                            <div ref={searchRef} className="refWrapper">
                                <div>
                                    { showSearch? (<button onClick={()=>setShowSearch(false) } className="search_btn"><IoCloseOutline size={24} /></button>): (<button className="search_btn" onClick={()=>setShowSearch(true)}><GoSearch size={24}/></button>)}
                                </div>
                                { showSearch? 
                                (
                                    <div className="absolute top-[52px] left-[0]  w-[100%] bg-[#fff]  mobile_search p-4">
                                        <div className="m-auto">
                                            <servicesearch/>
                                        </div>
                                    </div>
                                )
                                :
                                ( 
                                ""
                                )
                                }
                            </div>    
                        </>
                    }
                    desktop={
                        <>
                            <div className="flex items-center">
                                <div className="w-[100%] text-right">
                                        <ContactButton/>
                                </div>
                            </div>
                        </>
                    }
                />
                <ResponsiveRender breakpoint={768}
                    mobile={
                        <>
                           
                           
                            {/* ===== Overlay ===== */}
                            <div
                                className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
                                isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                                }`}
                                onClick={() => setIsOpen(false)}
                            />
                            {/* ===== Offcanvas Sidebar ===== */}
                            <div
                                    className={`fixed top-0 left-0 h-full w-[260px] bg-white z-50 shadow-lg transform transition-transform duration-300 ${
                                    isOpen ? "translate-x-0" : "-translate-x-full"
                                    }`}
                                >
                                {/* Close Button */}
                                <div className="flex justify-end p-4 border-b">
                                <button onClick={() => setIsOpen(false)}>
                                    <IoCloseOutline size={26} />
                                </button>
                                </div>

                                {/* Mobile Nav Links */}
                                <ul className="flex flex-col">
                                <li>
                                    <Link
                                    href="/"
                                    onClick={() => setIsOpen(false)}
                                    className={`${defautNavClasses} ${
                                        pathname === "/" ? "active" : ""
                                    }`}
                                    >
                                    Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                    href="/about"
                                    onClick={() => setIsOpen(false)}
                                    className={`${defautNavClasses} ${
                                        pathname === "/about" ? "active" : ""
                                    }`}
                                    >
                                    About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                    href="/services"
                                    onClick={() => setIsOpen(false)}
                                    className={`${defautNavClasses} ${
                                        pathname === "/services" ? "active" : ""
                                    }`}
                                    >
                                    Services
                                    </Link>
                                </li>
                                </ul>
                            </div>
                        </>
                    }
                />  
            </header>
        </>
    );
}