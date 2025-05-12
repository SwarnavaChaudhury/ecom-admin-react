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
import { SiMaterialdesignicons } from "react-icons/si";
import Breadcrumb from '../common/Breadcrumb';





export default function MaterialAdd() {
    return (
        <>



            <Breadcrumb fst_para={<><SiMaterialdesignicons className='text-blue-500' /> Material</>} fst_path="/material/view" snd_para="Add" />


            <div className='max-w-[1320px] mx-auto gap-3 mb-50 mt-10 border-1'>

                <div className='bg-slate-100 border-b-1 flex justify-between items-center py-2 px-5 rounded-b-xl'>
                    <h1 className='text-2xl font-semibold'>
                        Add Material
                    </h1>
                </div>
                <div className='m-5'>
                    <label htmlFor="material_name" className='block my-2 font-bold'>
                        Material Name
                    </label>
                    <input type="text" id='material_name' placeholder='Enter Material Name...' className='w-full rounded-md border-1 border-stone-400' />

                    <label htmlFor="material_order" className='block my-2 font-bold'>
                        Order
                    </label>
                    <input type="text" id='material_order' placeholder='Enter Material Order...' className='w-full rounded-md border-1 border-stone-400' />

                    <button type='button' className='bg-violet-700 text-white py-2 px-5 mt-5 rounded-lg cursor-pointer'>
                        Add Material
                    </button>

                </div>

            </div>



        </>
    )
}
