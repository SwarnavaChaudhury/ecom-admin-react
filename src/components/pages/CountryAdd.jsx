import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone';

import { Link } from 'react-router'
import SideBar from '../common/SideBar'
import Footer from '../common/Footer'
import Header from '../common/Header'
import { FaUser } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { MdFilterListAlt } from "react-icons/md";
import { MdFilterAltOff } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaMapLocationDot } from "react-icons/fa6";





export default function CountryAdd() {


    return (
        <>

            <section className='w-full'>
                <div className='grid grid-cols-[15%_auto] gap-5'>

                    <div className=''>
                        <SideBar />
                    </div>
                    <div>
                        <Header />

                        <div className='w-full flex items-center justify-start gap-2 text-stone-700 border-0 border-b-2 border-stone-400 py-2 mb-5 text-xl'>

                            <Link to='/home' className='flex items-center justify-start gap-1'>
                                <MdHomeFilled className='text-blue-500' />
                                Home
                            </Link>
                            /
                            <span className='flex items-center justify-start gap-1'>
                                <FaMapLocationDot className='text-blue-500' />
                                Courtry
                            </span>
                            /
                            <span>
                                Add
                            </span>
                        </div>




                        <div className='max-w-[1320px] mx-auto gap-3 mb-50 mt-10 border-1'>

                            <div className='bg-slate-100 border-b-1 flex justify-between items-center py-2 px-5 rounded-b-xl'>
                                <h1 className='text-2xl font-semibold'>
                                    Add Country
                                </h1>
                            </div>
                            <div className='m-5'>

                                <div>
                                    <label htmlFor="country_name" className='block my-2 font-bold'>
                                        Country Name
                                    </label>
                                    <input type="text" id='country_name' placeholder='Enter Country Name...' className='w-full rounded-md border-1 border-stone-400' />

                                    <label htmlFor="country_order" className='block my-2 font-bold'>
                                        Country Order
                                    </label>
                                    <input type="text" id='country_order' placeholder='Enter Category Order...' className='w-full rounded-md border-1 border-stone-400' />
                                </div>

                                <button type='button' className='bg-violet-700 text-white py-2 px-5 mt-5 rounded-lg cursor-pointer'>
                                    Add Country
                                </button>


                            </div>

                        </div>




                        <Footer />

                    </div>
                </div>
            </section>


        </>
    )
}