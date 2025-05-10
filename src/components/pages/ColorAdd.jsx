import React, { useState } from 'react'
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






export default function ColorAdd() {
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
                                <IoIosColorPalette className='text-blue-500' />
                                Colors
                            </span>
                            /
                            <span>
                                Add
                            </span>
                        </div>


                        <div className='max-w-[1320px] mx-auto gap-3 mb-50 mt-10 border-1'>

                            <div className='bg-slate-100 border-b-1 flex justify-between items-center py-2 px-5 rounded-b-xl'>
                                <h1 className='text-2xl font-semibold'>
                                    Add Colors
                                </h1>
                            </div>
                            <div className='m-5'>
                                <label htmlFor="color_name" className='block my-2 font-bold'>
                                    Color Name
                                </label>
                                <input type="text" id='color_name' placeholder='Enter Color Name...' className='w-full rounded-md border-1 border-stone-400' />

                                <label htmlFor="color_picker" className='block my-2 font-bold'>
                                    Color Picker
                                </label>
                                <input type="color" name="" id="color_picker" />

                                <label htmlFor="color_order" className='block my-2 font-bold'>
                                    Order
                                </label>
                                <input type="text" id='color_order' placeholder='Enter Color Order...' className='w-full rounded-md border-1 border-stone-400' />

                                <button type='button' className='bg-violet-700 text-white py-2 px-5 mt-5 rounded-lg cursor-pointer'>
                                    Add Color
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
